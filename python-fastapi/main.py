from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"status": "OK", "application": "python-fastapi"}
