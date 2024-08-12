from pathlib import Path
from fastapi import FastAPI
from pydantic_settings import BaseSettings

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