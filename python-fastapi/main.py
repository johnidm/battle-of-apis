from fastapi import FastAPI
import socket

app = FastAPI()


@app.get("/")
async def root():
    return {"status": "OK", "hostname": socket.gethostname(), "application": "python-fastapi"}
