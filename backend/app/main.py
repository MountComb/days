from datetime import date
from pathlib import Path
from fastapi import FastAPI, HTTPException
from pydantic_settings import BaseSettings
import logging

logging.basicConfig(level=logging.INFO)


class DaysAPISettings(BaseSettings):
    data_path: Path = "./"


settings = DaysAPISettings()
app = FastAPI()


if not settings.data_path.exists():
    settings.data_path.mkdir(parents=True)


@app.get("/")
async def root():
    return {"message": "Hello World!"}


@app.get("/settings")
async def get_settings():
    return settings.model_dump()


@app.get("/notes/{date}")
async def get_notes(date: date, create: bool = False):
    note_path = settings.data_path / f"{date}/note.md"
    if note_path.exists():
        return {"note": note_path.read_text()}
    if create:
        logging.debug(f"Creating note for {date}")
        note_path.parent.mkdir(parents=True, exist_ok=True)
        note_path.touch()
        return {"note": ""}
    raise HTTPException(status_code=404, detail="Note not found")


@app.put("/notes/{date}")
async def put_notes(date: date, note: str):
    note_path = settings.data_path / f"{date}/note.md"
    if not note_path.parent.exists():
        note_path.parent.mkdir(parents=True)
    note_path.write_text(note)
    return {"note": note}
