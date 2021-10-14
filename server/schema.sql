CREATE DATABASE chat;

USE chat;

CREATE TABLE messages(
  id INT,
  username INT,
  msg INT,
  roomname INT,
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

