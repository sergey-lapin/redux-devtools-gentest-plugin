import React, { Component }  from 'react';

export class Begin extends Component {
    render() {
        var t = "{";
        return <span>{t}</span>;
    }
}

export class End extends Component {
    render() {
        var t = "}";
        return <span>{t}</span>;
    }
}