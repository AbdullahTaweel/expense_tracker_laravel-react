import React from 'react'
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h5>Error 404 :(</h5>
            <h3> you reached to an unexisted end point</h3>
            <br></br>
            <Link to='/'>Go Home Page</Link>
        </div>
    )
}
