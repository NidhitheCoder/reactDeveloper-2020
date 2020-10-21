import React from "react";

const withData = (WrappedComponent) => { ////changeID-111 : , dataSource
  class withData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }

    componentDidMount() {
       setTimeout(() => {
        // changeID-111:  fetch(dataSource)
        fetch(this.props.dataSource)
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data.slice(0, 3) });
        });
      }, 1500);
      
    }

    render() {
      const {dataSource,...otherProps} = this.props;
     return this.state.data.length < 1 ? (<h1>LOADING</h1>) :
      (<WrappedComponent data={this.state.data} {...otherProps}/>)
    }
  }
console.log(withData)
  return withData;
};

export default withData;
