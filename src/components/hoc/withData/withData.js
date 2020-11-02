import React from 'react';
//import PropTypes from 'prop-types';

const withData = ( Component , url ) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
    // al caricamento del componente
    componentDidMount(){
      fetch( url )
      .then(response => response.json())
      .then( data => this.setState({data}))
    } // fine caricamento componente

    render(){
      return <Component {...this.props} {...this.state} />
    }
  };
}

export default withData;