import React from 'react';
import ReactDOM from 'react-dom/client';

class AfterLoad extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {color: "red"};
  }
  componentDidMount() {

  	let h1Id = document.getElementById('fav');
  	let hdd = h1Id.getAttribute('data-id');
    setTimeout(() => {

  	console.log('after load',hdd);
      this.setState({color:"yellow"})
    }, 1000)
  }
  render() {
    return (
      <div>
      <h1 id="fav" data-id="header_class">My Favorite Color is {this.state.color}</h1>

      </div>
    );
  }
}

export default AfterLoad;

              