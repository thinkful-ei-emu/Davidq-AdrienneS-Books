import React, { Component } from 'react';
import './App.css';
import Search from './component/Search';
import Filter from './component/Filter';
import List from './component/List';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      list:[],
      searchTerm : '',
      filters :[],
      error: null
    };
  }
  updateSearchTerm = (term) =>{
    this.setState({searchTerm:term}, this.doFetch); 
  }



  doFetch(){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`;
    console.log(url);
    fetch (url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(new Error(`Something went wrong; ${res.statusCode}`));
        }
      })
      .then(response => {this.setState({list:response.items})
      console.log(response);
    })
      
      .catch((error) => {this.setState({error:error.message})});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">     
          <h1>Google Book Search</h1>
          </div>
          <Search handleSearch={this.updateSearchTerm}/>
          <Filter/>
          <List>
            {'this is a list'}
          </List>
          
      </div>
    );
  }
}

export default App;
