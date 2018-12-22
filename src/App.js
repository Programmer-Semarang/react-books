import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    axios.get("http://167.160.188.135/api/book")
         .then((response)=>{
           console.log(response.data.data)
           this.setState({
             books: response.data.data
           })
         })
         .catch((error)=>{
           console.error(error)
         })
  }

  render() {
    return (
      <div className="App">
        <BookList books={this.state.books} />
      </div>
    );
  }
}

class Book extends React.Component{

  render(){
    return(
      <div>
        <h1>{this.props.judul}</h1>
        <h3>{this.props.author.name}</h3>
        <hr />
      </div>)
  }

}

class BookList extends React.Component{

  render(){
    return(
      <div>
        {this.props.books.map((book)=>{
          return <Book judul={book.judul} author={book.author} />
        })}
      </div>)
  }

}

export default App;
