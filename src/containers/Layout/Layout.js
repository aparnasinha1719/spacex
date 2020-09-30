import React, { Component } from 'react'
import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';


export class Layout extends Component {
    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div className="container" style={{padding:'30px 0 0'}}>{this.props.children}</div>
            </div>
        )
    }
}

export default Layout
