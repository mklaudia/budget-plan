import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styles from './Header.css';

class Header extends Component{

    render(){
        return <h1 className={styles.app}>Budget Plan</h1>;
    }
}

export default Header;