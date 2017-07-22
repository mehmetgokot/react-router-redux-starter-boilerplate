import React from 'react'
import {Link} from 'react-router-dom';
import {action} from '../../redux/actions'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'

const App2 = (props) => {
    return (
        <div>
            <ul>
                <Textfield/>
                <li onClick={() => {
                    props.action("Action Called")
                }}>App 2
                </li>
                <li><Link to="app3">App 3</Link></li>
            </ul>
        </div>
    )
};

export default connect(state => ({
    state
}), {action})(App2);

const Textfield_ = () => {
    return (
        <Field name="exampleText" component={_Textfield}/>
    )
};
const _Textfield = props => <input type="text" {...props.input} />

const Textfield = reduxForm({form: "exampleForm"})(Textfield_);