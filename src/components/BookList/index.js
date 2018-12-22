import React, { Component } from 'react'
import Book from '../Book'

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

  export default BookList;