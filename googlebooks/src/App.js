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
    };
  }
  updateSearchTerm = (term) =>{
    this.setState({searchTerm:term});

  }
  componentDidMount(){

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
