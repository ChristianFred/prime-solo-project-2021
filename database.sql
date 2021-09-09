
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (500) UNIQUE NOT NULL
);

CREATE TABLE "Matchup" (
    "id" SERIAL PRIMARY KEY,
    "outcome" BOOLEAN,
    "myCharacter" INTEGER, 
    "enemyCharacter" INTEGER,
    "user_id" INT REFERENCES "user" NOT NULL
);

CREATE TABLE "Characters" (
    "id" SERIAL PRIMARY KEY,
    "Character" VARCHAR (250), 
    "image_path" VARCHAR (250)
);

CREATE TABLE "MatchupItems" (
    "id" SERIAL PRIMARY KEY,
    "winner_Id" INT REFERENCES "Matchup" NOT NULL,
    "items_Id" INT REFERENCES "Items" NOT NULL
); 

CREATE TABLE "Items" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (250) NOT NULL, 
    "image_path" VARCHAR (250)
);