# Section 1,2&3 - Basics of React

### React Concepts

- React around the concept of reusable components.
- Unidirectional data flow.
- Flow of data in react : Views -> Actions -> State

### Single Page Applications

- single page applications helps to reduce loading time of webpage.
- single page replace component when it is needed not load whole page again.

### Fetching Content

- lifecycle methods are automatically react.
- Anything in between component tag is children.
- break program into simple small components

### The Job of a React Developer

- 1. Decide on components
  - State v/s Props
- 2. Decide the state and where it lives
  - when the state changes then the state using components only changing.
- 3. What changes when state changes

### Rect Components Advantages

- Wsse can use same component for multiple uses and multiple data processing.
- We can reuse components for multiple datas processing(resusable smaller components).
- The component name must show exactly what it does.
- Flexibility of performance improvement.
- Components are easy to test and find bugs quickly.

### >> setState

- setState is asyncronous funciton call, thats why the search button return the state(searchField state in this program) value one letter behind.

### Asyncronous and Syncronous Function Call

- synchornous funciton call something we can expect to happen almost immediatly.js for wait continuesly to finish syncronous funciton call.
- asyncrounos action or events is something is actually takes definite amount of time javascript does not know.its actually runs the rest of the code after and then when the asyncronous event finishes it then run that finished events.

### Synthetic events

- synthetic events is like a fake events it pretents react events

### Array Methods

- filter - for filtering items from an array,includes - check the given string is include in array item(take and compare each array elements).

### Functional Component

- They dont have access to state and constructor. They also dont have lifecycle methods like componentDidMount.
- Sometimes we need to render some html only.
- Functional component get some props and return an html.

### React & react-DOM

- React is a great kind of engine.
- yarn upgrade - helps to upgrade dependencies versions.
- ^ sign indicates new and latest version is available.
- yarn list react react-dom react-scripts,yarn install,yarn upgrade
- npm list react react-dom react-script,npm update,
- - vulneralibities - vulnerabilities are minor security concern.
- - nom audit fix helps to remove all vulnerabilities.

### Lock File

- Lock file - lock file is auto generated file by either npm or yarn that lock the version of all the packages inside our application within a specific range based on the rool that we set inside the package.json
- why we need lock file ?
  - Multiple people work with different version of same dependencies with same project will causes break our application. Need everybody use a consistant version of dependencies in same project/ application.Yarn lock file ensure that everybody using same version of dependencies.

### Virtual DOM

- Virtual Dom is a complete copy of the actual Dom.
- Actual Dom -> Virtual Dom -> New virtual Dom

### React

- React library helps to manipulate the DOM efficiently.
- Asyncronous will happen sometime in the future.Async will wait for complete the task.
- Props as a parameter in constructor helps to use parameter in state. you canuse this.props inside of a constructor.

### State

- Default value of state is 47. then,

  ```
  this.setState({stateName:56},()=>console.log(this.state.stateName));
  console.log(this.state.stateName);

   - In the above example the first console ``log the latest state`` (// return 56).
   - The second console ``log the one state before the latest update`` (// return 47).
  ```

## Lifecycle Methods

### Mounting Phase

- Mounting phase is the phase the component is being put on the DOM for the first time.
- It starts before the component on our DOM.
- Call the constructor first.

1. render() method

- render() method tell that what to display to browser.
- After the render the react update the DOM.
- Things like API calls are happen here(base component fetching data)

### Updating Phase

- Newprops,setState() and New manually forceUpdate().
- Changes and updating of DOM is happen in this phase.
- componentDidMount() - Method that call after update the DOM.
- When ever a component update or rerender all the children also rerender.

### Unmount Phase

- componentWillUnmount() get called.(not rendering components)

# Section -4 Master Project : Setting-up E-commerce Project

###

- React is just a UI library react does not provide routing for us.

# Section 5 & 6

### React-router-dom

- Route :- helps to routing trough the pages
  properties are: exact,component,path
- Switch :- helps to get more controll over code.

- props - history,location,match

  - ## history
  - Location
    - Location props tells us to where we are currently.
  - match

  * Allow nested route structure

- There is two ways to navigate in react-router-dom between pages

  1. Link component - It borrowing the url and tell to application what to rerender.
  2. history prop(history.push).

- withRouter :- withRouter is a higher order component. It takes a component as an argument and return a modified component. withRouter helps to access history to inner components.

# Section 7

## Firebase

- There are two types of data in a database
  1. Collection - it's like an object or group
  2. Documents -
- A query is a request we make to firestore to give us something from database.
- Firestores return two types of objects: referances and snapshots

  1. `QueryReferance` :
     A queryReferance object is an object that represents the "current" place in the database that we are querying. It does not have tha actual data of the collection or document.It have properties that tell the details about it.


      We can get them by calling either:
      ```
        * firestore.doc('/users/:userid');
        * firestore.collection('/users');
      ```
      - Document Referance : CRUD(set(),get(),update(),delete())
      - Collection Referance : add()


    2. `QuerySnapshots` :
      - We get a snapshotDocument object  from our documentReferance object.
      - It allows to check if a document exists at this query using the .exists property which return a boolean value.
      - We can also get  the actual properties on the object by calling the .data() method, which return us a JSON document object.

- Firestore always return these objects, even if nothing exists at from that query.

## Redux

- Redux is a librady that makes state management easier.
- Redux actulally inspire from database management.
- Redux is good for managing large state.
- Redux avoid this.state becouse of it is more complicated.
- The Redux allows react state to be more scalable.
- Redux does'nt replace completely the this.state (or this.setState() in react).
- Usefull for sharing data between components.
- With react it is very difficult to moveup state on one layer. With redux it is very easy.
- Predictible state management using the 3 principles.they are;

  ```
    * <u> Single principle of truth <u>.
      - One single object describes entire state of the app.

    * State is read only.
      - Not modifyinng the object.
      - It prevent unexpected errors.
      - The state that modified with Redux is never get modified. We would to create a new state   after each action is taken by user.

    * Changes using pure functions.
      - Pure functions :- Receives and input and always return an output that is predictible.
      - Action -> Root Reducer -> Store -> (react) -> DOM Changes
        - a Reduces is a pure function.
        - the output is created by  reducer is state (Store, called it in redux).

  ```

  - Uses an architecture pattern called Flex Pattern. In this everithing flows one way.
    - Action -> Dispatcher -> Store -> View
