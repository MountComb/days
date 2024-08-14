from datetime import date
from pathlib import Path
from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic_settings import BaseSettings
import logging

logging.basicConfig(level=logging.INFO)


class DaysAPISettings(BaseSettings):
    data_path: Path = "./"


settings = DaysAPISettings()
app = FastAPI()


if not settings.data_path.exists():
    settings.data_path.mkdir(parents=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World!"}


@app.get("/settings")
async def get_settings():
    return settings.model_dump()


@app.get("/note/{date}")
async def get_note(date: date, create: bool = False):
    note_path = settings.data_path / f"{date}/note.md"
    if note_path.exists():
        return {"note": note_path.read_text()}
    if create:
        logging.debug(f"Creating note for {date}")
        note_path.parent.mkdir(parents=True, exist_ok=True)
        note_path.touch()
        return {"note": ""}
    raise HTTPException(status_code=404, detail="Note not found")


@app.put("/note/{date}")
async def put_note(date: date, note: str = Body(..., media_type='text/markdown')):
    note_path = settings.data_path / f"{date}/note.md"
    if not note_path.parent.exists():
        note_path.parent.mkdir(parents=True)
    note_path.write_text(note)
    return {"note": note}
