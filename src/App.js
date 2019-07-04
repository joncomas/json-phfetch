import React from 'react';
import './App.css';
import Holders from './components/Holder.js'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respon => respon.json())
      .then(data => {
        this.setState({
          users: data
        });
        console.log(data);

      })
  }    
  
  render(){
      return (
        <div className="App">
          <div className="container">
            <div className="row">  
              <div className="col-md-4 offset-4">               
              <button type="button" class="list-group-item list-group-item-action active">
                  Click to see more details
              </button>
                  <Holders allUsers = {this.state.users}/>

              </div>
            </div>
          </div>
        </div>  
    );
  }
}
