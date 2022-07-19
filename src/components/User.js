import classes from './User.module.css';
import {Component} from 'react';

// this is not a javascript concept this is mordern javascript concept
// this render method to equvalent to return stement in a functional components
//props proparty can access in class based componts that time need to use this
class User extends Component {
    render() {
        return <li className={classes.user}>{this.props.name}</li>; 
    }
};

// const User = (props) => {
//     return <li className={classes.user}>{props.name}</li>;
// };

export default User;

