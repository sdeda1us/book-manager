CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    publication_year SMALLINT,
    pages SMALLINT,
    genre_id SMALLINT REFERENCES genres
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre VARCHAR(100)
);
