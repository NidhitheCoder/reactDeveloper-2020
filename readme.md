#Complete React Developer 2020

### React Concepts

- React around the concept of reusable components.
- Unidirectional data flow.
- Flow of data in react : Views -> Actions -> State

### Single page applications

- single page applications helps to reduce loading time of webpage.
- single page replace component when it is needed not load whole page again.

### Fetching content

- lifecycle methods are automatically react.
- Anything in between component tag is children.
- break program into simple small components

### The job of a react developer

- 1. Decide on components
  - State v/s Props
- 2. Decide the state and where it lives
  - when the state changes then the state using components only changing.
- 3. What changes when state changes

### Rect components advantages

- Wsse can use same component for multiple uses and multiple data processing.
- We can reuse components for multiple datas processing(resusable smaller components).
- The component name must show exactly what it does.
- Flexibility of performance improvement.
- components are easy to test and find bugs quickly.

### >> setState
- setState is asyncronous funciton call, thats why the search button return the state(searchField state in this program) value one letter behind.

### Asyncronous and syncronous function call

- synchornous funciton call something we can expect to happen almost immediatly.js for wait continuesly to finish syncronous funciton call.
- asyncrounos action or events is something is actually takes definite amount of time javascript does not know.its actually runs the rest of the code after and then when the asyncronous event finishes it then run that finished events.

### Synthetic events

- synthetic events is like a fake events it pretents react events

### Array methods

- filter - for filtering items from an array,includes - check the given string is include in array item(take and compare each array elements).

### Functional component

- They dont have access to state and constructor. They also dont have lifecycle methods like componentDidMount.
- Sometimes we need to render some html only.
- Functional component get some props and return an html.

### React & react-DOM
- React is a great kind of engine.
- yarn upgrade - helps to upgrade dependencies versions.
- ^ sign indicates new and latest version is available.
- yarn list react react-dom react-scripts,yarn install,yarn upgrade
- npm list react react-dom react-script,npm update,
- * vulneralibities - vulnerabilities are minor security concern.
- * nom audit fix helps to remove all vulnerabilities.
### Lock file
- Lock file - lock file is auto generated file by either npm or yarn that lock the version of all the packages inside our application within a specific range based on the rool that we set inside the package.json
- why we need lock file ?
    - Multiple people work with different version of same dependencies with same project will causes break our application. Need everybody use a consistant version of dependencies in  same project/ application.Yarn lock file ensure that everybody using same version of dependencies.

### Virtual DOM
- Virtual Dom is a complete copy of the actual Dom.
- Actual Dom -> Virtual Dom -> New virtual Dom