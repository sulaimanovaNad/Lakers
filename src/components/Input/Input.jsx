import React from 'react';

export default class Input extends React.Component {
    handleChange = (e) => {
        const value = e.target.value;
        this.props.onChange(value);
    }

    render() {
        const { type, value, placeholder } = this.props;

        return (
            <input value={value} type={type} placeholder={placeholder} onChange={this.handleChange} />
        )
    } 
}