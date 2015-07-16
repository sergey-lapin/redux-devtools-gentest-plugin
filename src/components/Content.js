import React, { Component } from 'react';

export default class Content extends Component {
    render() {
        return <div style={{marginLeft:'20%', maxWidth:'80%', paddingLeft:'2em', paddingRight:'6em'}}>{this.props.children}</div>;
    }
}