from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import databases
import sqlalchemy
import psycopg2

# Database Configuration
DATABASE_URL = "postgresql://azqqsdpu:8Jp5CLREZCWeHX7zJNrqtbVm8K7JnZiR@flora.db.elephantsql.com/azqqsdpu"
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

# User Model
users = sqlalchemy.Table(
    "users",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("email", sqlalchemy.String, unique=True, index=True),
    sqlalchemy.Column("password", sqlalchemy.String),
)

# FastAPI App
app = FastAPI()

# User Registration Request Model
class UserCreate(BaseModel):
    email: str
    password: str

# User Login Request Model
class UserLogin(BaseModel):
    email: str
    password: str

# Database Initialization
engine = sqlalchemy.create_engine(DATABASE_URL)
metadata.create_all(engine)

# User Registration Endpoint
@app.post("/register")
async def register(user: UserCreate):
    query = users.insert().values(
        email=user.email,
        password=user.password,
    )
    user_id = await database.execute(query)
    return {"user_id": user_id, "email": user.email}

# User Login Endpoint
@app.post("/login")
async def login(user: UserLogin):
    query = users.select().where(users.c.email == user.email)
    db_user = await database.fetch_one(query)
    if db_user is None or db_user["password"] != user.password:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"message": "Login successful"}

# Dependency for Database Connection
@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()
