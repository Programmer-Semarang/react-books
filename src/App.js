import React, { Component } from 'react';
import axios from 'axios';
import BookList from './components/BookList'

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





export default App;
