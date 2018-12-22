import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{this.props.judul}</h5>
            <p className="card-text">{this.props.author.name}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Book;