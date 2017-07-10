CREATE DATABASE devLeppard_db;
USE devLeppard_db;

CREATE TABLE users (
user_id int AUTO_INCREMENT,
password varchar(60) NOT NULL,
email varchar(30) NOT NULL,
first_name varchar(30) NOT NULL,
user_type varchar(30) NOT NULL,
PRIMARY KEY(user_id)
);

CREATE TABLE projects (
project_id int AUTO_INCREMENT,
project_name varchar(30) NOT NULL,
-- status BOOLEAN NOT NULL,
-- user int NOT NULL,
PRIMARY KEY(project_id)
-- FOREIGN KEY (user) REFERENCES users(user_id)
);

CREATE TABLE tasks (
task_id int AUTO_INCREMENT,
task_name varchar(30) NOT NULL,
resource varchar(30) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
parentProject int,
PRIMARY KEY(task_id),
FOREIGN KEY (parentProject) REFERENCES projects(project_id)
);

-- CREATE TABLE users (
--  userid int AUTO_INCREMENT,
--  password varchar(60) NOT NULL,
--  email varchar(30) NOT NULL,
--  first_name varchar(30),
--  user_type int(1),
--  PRIMARY KEY(userid)
-- );


-- CREATE TABLE projects (
--  project_id int AUTO_INCREMENT,
--  project_name varchar(30) NOT NULL,
--  start_date DATE,
--  end_date DATE,
--  status BOOLEAN,
--  project_manager int,
--  PRIMARY KEY(project_id),
--  FOREIGN KEY (project_manager) REFERENCES users(userid)
-- );

-- CREATE TABLE files (
--  file_id int AUTO_INCREMENT,
--  file_name varchar(30) NOT NULL,
--  uploader int,
--  PRIMARY KEY(file_id),
--  FOREIGN KEY (uploader) REFERENCES users(userid)
-- );


-- CREATE TABLE tasks (
--  task_id int AUTO_INCREMENT,
--  task_name varchar(30) NOT NULL,
--  project int,
--  created_by int,
--  assigned_to int,
--  PRIMARY KEY(task_id),
--  FOREIGN KEY (created_by) REFERENCES users(userid),
--  FOREIGN KEY (assigned_to) REFERENCES users(userid)
-- );

-- CREATE TABLE membership (
--  membership_id int AUTO_INCREMENT,
--  user int,
--  project int,
--  PRIMARY KEY (membership_id),
--  FOREIGN KEY (user) REFERENCES users(userid),
--  FOREIGN KEY (project) REFERENCES projects(project_id)
-- );


-- CREATE TABLE sprints (
--  sprint_id int AUTO_INCREMENT,
--  sprint_name varchar(30) NOT NULL,
--  sprint_end DATE,
--  project int,
--  task int,
--  PRIMARY KEY (sprint_id),
--  FOREIGN KEY (project) REFERENCES projects(project_id),
--  FOREIGN KEY (task) REFERENCES tasks(task_id)
-- );