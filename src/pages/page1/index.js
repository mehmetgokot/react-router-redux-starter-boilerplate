import React from 'react'
import {Link} from 'react-router-dom';


export default () => {
    return (
        <div>
            <ul>
                <li>App</li>
                <li><Link to="app2">App2</Link></li>
            </ul>
        </div>
    )
}