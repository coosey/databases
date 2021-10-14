CREATE DATABASE chat;

USE chat;

CREATE TABLE messages(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  message VARCHAR(255) NOT NULL,
  roomname VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY(id)
);


/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

