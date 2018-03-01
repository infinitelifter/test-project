import React, {Component} from 'react'
import Item from './item'

import {fetchData} from '../actions/index'

export default class ItemList extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ''
        }
    }
    componentDidMount(){
        console.log(`${window.location.pathname}/src/data.json`)
        fetchData()
    }
    render() {
        return (
            <div className="sidebar float-left">
                <ul>
                    <Item 
                    key="1"
                    title="kokot"
                    />
                    <Item 
                    key="2"
                    title="pica"
                    />
                    
                </ul>
            </div>
        )
    }
}