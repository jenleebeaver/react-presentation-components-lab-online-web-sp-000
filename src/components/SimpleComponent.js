import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            mood: 'happy'
    };
}

    handleClick = () => {
        console.log(this.state);
        const feeling = this.state.mood === 'sad' ? 'happy' : 'sad'
        // console.log(this.state.mood === 'happy');
        // if (this.state.mood === 'happy'){
        //     feeling = 'sad'
        // } else {
        //     feeling = 'happy'
        // }
        console.log(feeling)
        // pass ternary code into setState so that current mood is opposite 
        this.setState({mood: feeling});
      }

    render (){
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.mood}</button>
            </div>
        )
    }
}
