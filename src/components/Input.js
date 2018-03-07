import React, { PureComponent } from 'react'

class Input extends PureComponent {
    state = {
        value: ''
    }
    
    componentWillMount(){
        if(this.props.initialValue){
            this.setState({value: this.props.initialValue})
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.initialValue !== nextProps.initialValue){
            this.setState({value: nextProps.initialValue})
        }
    }

    handleInputChange = event => {
        const value = event.target.value;

        this.setState({value})

        if(this.props.onChange){
            this.props.onChange(value)
        }
    }

    render() {
        const { value } = this.state

        return (
            <input type="text" value={value} onChange={this.handleInputChange}/>
        )
    }
}

Input.propTypes = {}

export default Input