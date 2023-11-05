import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import Data from './films.json'

export default class Movies extends Component {
  render() {
    return(
      <div>
        {
            Data.map(post => (
                <div key={post.id}>
                    <h2>{post.Title}</h2>
                    <p>{post.Released}</p>
                    <p>{post.Genre}</p>
                    <p>{post.Director}</p>
                    <p>{post.Rated}</p>

                </div>
            ))
        }
    </div>  
    )
}
}