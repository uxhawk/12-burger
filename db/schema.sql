-- DROP
-- DATABASE
-- IF EXISTS burgers_db;


CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    auto_increment,
    burger_name VARCHAR
    (64) NOT NULL,
    devoured boolean DEFAULT false,
    PRIMARY KEY
    (id)
);