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

CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	url VARCHAR(150),
	book_id SMALLINT REFERENCES books
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

INSERT INTO images (url, book_id)
VALUES ('https://m.media-amazon.com/images/I/51YIZN5kfSL.jpg', 2);

INSERT INTO images (url, book_id)
VALUES ('https://m.media-amazon.com/images/I/51XsGcP4zyL._SY346_.jpg', 1);

INSERT INTO images (url, book_id)
VALUES ('https://m.media-amazon.com/images/I/51sig3Nmy3L._SY346_.jpg', 3);

INSERT INTO images (url, book_id)
VALUES ('https://m.media-amazon.com/images/I/510g2SGySaL._SY346_.jpg', 4);

INSERT INTO images (url, book_id)
VALUES ('https://images-na.ssl-images-amazon.com/images/I/41Tue+uEVoL._SY344_BO1,204,203,200_.jpg', 5);

