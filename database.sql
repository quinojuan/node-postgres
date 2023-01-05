create database library;

create table books(
    section int,
    title text,
    author text
);

insert into books values
    (2, 'Digital Fortress', 'Dan Brown'),
    (3, 'World War 2', 'Max Brooks');

create table users(
    username text,
    password text
);

insert into users values
('juan','juan123'),
('jaime','jaime321'),
('sara','saldarriaga');