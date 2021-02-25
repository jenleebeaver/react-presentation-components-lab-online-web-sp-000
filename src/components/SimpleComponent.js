import React from 'react';

export default class SimpleComponent extends Component {

    state = {
        mood: 'happy' ? 'sad' : 'happy'
    }

    handleClick = () => {
        this.setState({mood});
      }

    render (){
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.mood}</button>
            </div>
        )
    }
}
