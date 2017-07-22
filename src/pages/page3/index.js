import React from 'react'
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            <ul>
                <li>App 3</li>
                <li><Link to="app4">App 4</Link></li>
            </ul>
        </div>
    )
}