import React from 'react';
import './App.css';
//import Holders from './components/Holder.js'
import Posters from './components/Posters.js';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      pictures: [],
    }
  }

  
  
  componentDidMount() {
    this.getUsersFromApi('https://jsonplaceholder.typicode.com/users');
    this.getNewsFromApi('https://jsonplaceholder.typicode.com/photos')
  }   
  
  getUsersFromApi(gUrl){
    fetch(gUrl)
    .then(respon => respon.json())
    .then(data => {
      this.setState({
        users: data
      });
      //console.log(data);
    })
  }

  getNewsFromApi(fUrl){
    fetch(fUrl)
    .then(respon => respon.json())
    .then(fdata => {
      this.setState({
        pictures: fdata
      });
      console.log(fdata);
    })
  }

  
  render(){
      return (
        <div className="App">
          <div className="container">
            <div className="row">  
                            
              
                  <Posters allPics = {this.state.pictures}/>
              
            </div>
          </div>
        </div>  
    );
  }
}

/*

<button type="button" className="list-group-item list-group-item-action active">
                  Click to see more details
              </button>




*/


//<Holders allUsers = {this.state.users}/>
