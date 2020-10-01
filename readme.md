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

  ```` this.setState({stateName:56},()=>console.log(this.state.stateName));
  console.log(this.state.stateName);

   - In the above example the first console ``log the latest state`` (// return 56).
   - The second console ``log the one state before the latest update`` (// return 47).
  ````

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

# Section 5

### React-router-dom

- Route :- helps to routing trough the pages
  properties are: exact,component,path
- Switch :- helps to get more controll over code.

- props - history,location,match

  - history
    -
  - Location
    - Location props tells us to where we are currently.
  - match

  * Allow nested route structure

- There is two ways to navigate in react-router-dom between pages
  1. Link component - It borrowing the url and tell to application what to rerender.
  2. history prop(history.push).

- withRouter :- withRouter is a higher order component. It takes a component as an argument and return a modified component. withRouter helps to access history to inner components.
