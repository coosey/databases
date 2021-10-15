CREATE DATABASE chat;

USE chat;
/* updated username to userid */
CREATE TABLE messages(
  id INT NOT NULL AUTO_INCREMENT,
  userid INT NOT NULL,
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

