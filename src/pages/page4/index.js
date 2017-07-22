import React from 'react'
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            <ul>
                <li>App 4</li>
                <li><Link to="/">App</Link></li>
            </ul>
        </div>
    )
}