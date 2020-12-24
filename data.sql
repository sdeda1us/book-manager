CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    publication_year SMALLINT,
    pages SMALLINT,
    subject_id SMALLINT REFERENCES subjects
);

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(100)
);

INSERT INTO subjects (subject)
VALUES ('fiction');

INSERT INTO subjects (subject)
VALUES ('non-fiction');

INSERT INTO subjects (subject)
VALUES ('poetry');

INSERT INTO subjects (subject)
VALUES ('history');

INSERT INTO books (title, publication_year, pages, subject_id)
VALUES ('Salt Pier', 2012, 88, 3);

INSERT INTO books (title, publication_year, pages, subject_id)
VALUES ('SPQR: A History of Ancient Rome', 2015, 607, 4);

INSERT INTO books (title, publication_year, pages, subject_id)
VALUES ('Anxious People: A Novel', 2020, 349, 1);