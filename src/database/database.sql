create database ecommerce;

create table if not exists products (
    id serial primary key,
    name varchar(255) not null unique,
    description varchar(255),
    value float not null,
    image varchar(255) not null,
    category_id int references categories (id)
);

create table if not exists categories (
    id serial primary key,
    name varchar(255) not null unique
);

create table if not exists users (
    id serial primary key,
    name varchar(255) not null,
    password varchar(50) not null,
    creationDate timestamp not null,
    birthDay timestamp not null,
    avatar varchar(255) not null,
    email varchar(255) not null unique
)