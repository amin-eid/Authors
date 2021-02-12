import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {

    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }


    return (
        <div>
            <h2><Link to="/authors/new">Add Author</Link></h2>
            <center>All Authors</center><center>
            {props.authors.map((author, idx)=>{
                // return <p key={idx}>{product.title}, {product.price}, {product.description}</p>
                return <p key={idx}><Link to ={author._id}>{author.name}</Link>                    |
                <button onClick={(e)=>{deleteAuthor(author._id)}}>
                    Delete
                </button></p>

            })}
            </center>
        </div>
    )
}