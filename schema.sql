DROP DATABASE IF EXISTS crm;
CREATE DATABASE crm;

USE crm;

CREATE TABLE contacts
(
    id int NOT NULL AUTO_INCREMENT, 
    user VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    type VARCHAR(255),
    date VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE users
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    date VARCHAR(255),
    PRIMARY KEY (id)
);