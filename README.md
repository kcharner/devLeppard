# catApp Project Management Tool

## Opportunity

This application is designed to make free lance project be more efficient and successful. This project creates a platform for developer and client to share information, agree on milestones, and track progress. Furthermore it propmts developers to use well vetted coding methodologies so small scale projects are as well thought out as large enterprise projects.

## Key Features
  * Centralized client and developer communication
  * Centralized project planning and management
  
## Competition
    http://www.skilledup.com/articles/best-project-management-apps-for-web-development
    
## Sketches of MVP
    https://docs.google.com/document/d/1ZReMVgkKWswgaN2kdN2jVnBg7AEowZrNWwRcCj_kSvw/edit?usp=sharing
    
## Database Architecture
  
MYSQL database
  
### Tables
 
###### USERS
	* userid
	* password/hash
	* email
	* first_name
	* user_type
 
 
###### PROJECTS
	* project_id
	* project_name
	* start_date
	* status (boolean)
	* Project_manager (FK, USerID)
	
 
###### Membership
	* USERID (FK)
	* PROJECTID(FK)
 
###### Files
	* FileID
	* FileName
	* Uploader (FK, User)
 
###### Tasks
	* taskid
	* taskName
	* projects(id)
	* usersid
 
###### SprintsTable
	* sprinted
	* sprintname
	* tasks(id)
	* deadline
 
    
 These tables contain the data to process login requests and provided information about web development projects and their 
  components



## User Acquisition

 * This application is intended for private use
 * Users will be added on a project-by-project basis
 * Application design will be built with scalability in mind
