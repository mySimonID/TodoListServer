# ToDoListServer

ToDoListServer provides a REST API, written using nodejs to manage a simple todo list held in an online Mongodb.
The server has been created to provide a consistent database backend to other UI projects that I have developed.

## Overview

The server provides a REST interface to manage the database a follows:

*  get('/')              - return all todo items
*  post('/new')          - add a single todo to the DB
*  post('/delete/:id'    - Delete an item from the DB
*  post('/save/:id'      - Save (update) an existing item to the DB
*  get('/version')       - return version of this code

## Database Set-up

The project depends on the creation of an online Mongodb using https://cloud.mongodb.com.
Setting up an initial mongodb is free to get you started.
Once you have the mongodb set-up, then change the file db/DBConfig.js in this repository to use your connect string.

I have then deployed the project as a Docker instance on my local machin using port number 49160. Refer to the 'DockerFile' to see how to configure and start the Docker image.

## Using

The server has been used in four example projects:

* [nodejs](https://github.com/mySimonID/NodeJSToDoList)
* [React](https://github.com/mySimonID/ReactToDoList)
* [React Native](https://github.com/mySimonID/ReactNativeToDoList)
* [Xamarin](https://github.com/mySimonID/XamarinToDoList)

Follow the individual links to each project to see how the server has been used.

## Future enhancements
- [ ] Implement authentication
- [ ] Implement auto-synch

## License
[MIT](https://choosealicense.com/licenses/mit/)

