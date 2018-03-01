import React, {Component} from 'react'


export default class Item extends Component{    
    render() {        
        return (
            <li key={this.props.key}>
                {this.props.title}
            </li>
        )
    }
}