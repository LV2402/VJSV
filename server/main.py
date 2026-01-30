from __future__ import annotations

import json
import re
import time
from pathlib import Path
from typing import List

from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parents[1]
PUBLIC_DIR = BASE_DIR / "public" / "assets"
DATA_DIR = PUBLIC_DIR / "admin-data"

DATA_DIR.mkdir(parents=True, exist_ok=True)

app = FastAPI()

app.mount("/assets", StaticFiles(directory=PUBLIC_DIR), name="assets")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "https://www.vjsahithivanam.in",
        "https://vjsahithivanam.in",
        "https://vjsv.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"] ,
    allow_headers=["*"] ,
)


def _safe_name(name: str) -> str:
    name = re.sub(r"[^a-zA-Z0-9._-]", "_", name)
    return name or "file"


def _load_json(file_path: Path) -> list:
    if not file_path.exists():
        return []
    try:
        return json.loads(file_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return []


def _save_json(file_path: Path, data: list) -> None:
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def _save_upload(upload: UploadFile, dest_dir: Path, prefix: str) -> str:
    dest_dir.mkdir(parents=True, exist_ok=True)
    timestamp = int(time.time() * 1000)
    safe_name = _safe_name(upload.filename or "image")
    file_name = f"{prefix}_{timestamp}_{safe_name}"
    file_path = dest_dir / file_name

    with file_path.open("wb") as buffer:
        buffer.write(upload.file.read())

    relative = file_path.relative_to(PUBLIC_DIR)
    return f"/assets/{relative.as_posix()}"


def _data_file(name: str) -> Path:
    return DATA_DIR / f"{name}.json"


@app.post("/api/akshara")
async def create_akshara(
    year: str = Form(...),
    short: str = Form(...),
    registerUrl: str = Form(...),
    image: UploadFile = File(...),
):
    dest_dir = PUBLIC_DIR / "events" / year
    image_path = _save_upload(image, dest_dir, "akshara")
    entry = {
        "year": year,
        "short": short,
        "registerUrl": registerUrl,
        "image": image_path,
    }
    file_path = _data_file("akshara")
    data = _load_json(file_path)
    data.append(entry)
    _save_json(file_path, data)
    return data


@app.delete("/api/akshara/{index}")
async def delete_akshara(index: int):
    file_path = _data_file("akshara")
    data = _load_json(file_path)
    if 0 <= index < len(data):
        data.pop(index)
        _save_json(file_path, data)
    return data


@app.post("/api/sintillashunz")
async def create_sintillashunz(
    year: str = Form(...),
    short: str = Form(...),
    long: str = Form(...),
    image: UploadFile = File(...),
):
    dest_dir = PUBLIC_DIR / "events" / year / "Sinti"
    image_path = _save_upload(image, dest_dir, "sinti")
    entry = {
        "year": year,
        "short": short,
        "long": long,
        "image": image_path,
    }
    file_path = _data_file("sintillashunz")
    data = _load_json(file_path)
    data.append(entry)
    _save_json(file_path, data)
    return data


@app.delete("/api/sintillashunz/{index}")
async def delete_sintillashunz(index: int):
    file_path = _data_file("sintillashunz")
    data = _load_json(file_path)
    if 0 <= index < len(data):
        data.pop(index)
        _save_json(file_path, data)
    return data


@app.post("/api/convergence")
async def create_convergence(
    year: str = Form(...),
    short: str = Form(...),
    long: str = Form(...),
    image: UploadFile = File(...),
):
    dest_dir = PUBLIC_DIR / "events" / year / "Convergence"
    image_path = _save_upload(image, dest_dir, "convergence")
    entry = {
        "year": year,
        "short": short,
        "long": long,
        "image": image_path,
    }
    file_path = _data_file("convergence")
    data = _load_json(file_path)
    data.append(entry)
    _save_json(file_path, data)
    return data


@app.delete("/api/convergence/{index}")
async def delete_convergence(index: int):
    file_path = _data_file("convergence")
    data = _load_json(file_path)
    if 0 <= index < len(data):
        data.pop(index)
        _save_json(file_path, data)
    return data


@app.post("/api/workshops")
async def create_workshop(
    year: str = Form(...),
    short: str = Form(...),
    long: str = Form(...),
    image: UploadFile = File(...),
):
    dest_dir = PUBLIC_DIR / "events" / "workshops" / year
    image_path = _save_upload(image, dest_dir, "workshop")
    entry = {
        "year": year,
        "short": short,
        "long": long,
        "image": image_path,
    }
    file_path = _data_file("workshops")
    data = _load_json(file_path)
    data.append(entry)
    _save_json(file_path, data)
    return data


@app.delete("/api/workshops/{index}")
async def delete_workshop(index: int):
    file_path = _data_file("workshops")
    data = _load_json(file_path)
    if 0 <= index < len(data):
        data.pop(index)
        _save_json(file_path, data)
    return data


@app.post("/api/gallery")
async def create_gallery(files: List[UploadFile] = File(...)):
    dest_dir = PUBLIC_DIR / "gallery_kosam"
    file_path = _data_file("gallery")
    data = _load_json(file_path)

    for upload in files:
        image_path = _save_upload(upload, dest_dir, "gallery")
        data.append({"src": image_path})

    _save_json(file_path, data)
    return data


@app.delete("/api/gallery/{index}")
async def delete_gallery(index: int):
    file_path = _data_file("gallery")
    data = _load_json(file_path)
    if 0 <= index < len(data):
        data.pop(index)
        _save_json(file_path, data)
    return data


@app.post("/api/highlights")
async def create_highlight(url: str = Form(...)):
    file_path = _data_file("highlights")
    data = _load_json(file_path)
    data.append({"url": url})
    _save_json(file_path, data)
    return data


@app.delete("/api/highlights/{index}")
async def delete_highlight(index: int):
    file_path = _data_file("highlights")
    data = _load_json(file_path)
    if 0 <= index < len(data):
        data.pop(index)
        _save_json(file_path, data)
    return data


@app.post("/api/writings")
async def create_writing(
    title: str = Form(...),
    author: str = Form(...),
    year: str = Form(...),
    type: str = Form(...),
    content: str = Form(...),
):
    file_path = _data_file("writings")
    data = _load_json(file_path)
    entry = {
        "id": int(time.time() * 1000),
        "title": title,
        "author": author,
        "year": year,
        "type": type,
        "content": content,
    }
    data.append(entry)
    _save_json(file_path, data)
    return data


@app.delete("/api/writings/{index}")
async def delete_writing(index: int):
    file_path = _data_file("writings")
    data = _load_json(file_path)
    if 0 <= index < len(data):
        data.pop(index)
        _save_json(file_path, data)
    return data
