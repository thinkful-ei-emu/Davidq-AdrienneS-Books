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
      filters:{
        filter: '',
        printType: 'all',
      },
      error: null,
      show: null
    };
  }
  updateSearchTerm = (term) => {
    this.setState({searchTerm:term}, this.doFetch); 
  }

  handleFilterChange = (filter) => {
    this.setState({filters: {...this.state.filters, ...filter}}, this.doFetch);
  }

  showMore = (bookId) => {
    this.setState({show: bookId})
  }

  doFetch(){
    const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`;
    const url= endpoint + '&' + Object.entries(this.state.filters).map(arr => {
      if(arr[1] === '') {
        return '';
      } else {
        return arr.join('=');
      }
    }).join('&');
    console.log(url);
    fetch (url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(new Error(`Something went wrong; ${res.statusCode}`));
        }
      })
      .then(response => {
        window.resp = response;
        this.setState({list:response.items})
      console.log(response);
    })
      
      .catch((error) => {this.setState({error:error.message})});
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header col-full">     
          <h1>Google Book Search</h1>
          </div>
          <Search handleSearch={this.updateSearchTerm}/>
          <Filter handleFilter={this.handleFilterChange}/>
          <List list={this.state.list} showMore={this.showMore} show={this.state.show}/>
          
      </div>
    );
  }
}

export default App;
