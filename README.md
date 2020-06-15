# ToDoListServer

keywords nodejs, express, REST, Mongodb

ToDoListServer is written using nodejs to manage a todo list held in an online Mongodb using REST.
The server has been created to provide a consistent database backend to other UI projects that I have developed.

## Database Set-up

The project depends on the create of a online Mongodb using https://cloud.mongodb.com.
Setting up an initial mongodb is free to get you started.
Once you have the mongodb set-up, then change the file db/DBConfig.js in this repository to your connect string.


## Oveview

The server provides a REST interface to manage the database a follows:

*  get('/')              - return all todo items
*  post('/new')          - add a single todo to the DB
*  post('/delete/:id'    - Delete an item from the DB
*  post('/save/:id'      - Save (update) an existing item to the DB
*  get('/version')       - return version of this code

## Using

The server has been used in four example projects:

* nodejs
* React
* React Native
* Xamarin

Follow the invividual links to each project to see how the serbver has been used.

## Future enhancements
- [ ] Implement authentication
- [ ] Implement auto-synch

## License
[MIT](https://choosealicense.com/licenses/mit/)

