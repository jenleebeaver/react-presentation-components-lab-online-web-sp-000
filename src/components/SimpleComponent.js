import React from 'react';

export default class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

    render (){
        return (
            <div>
                <button></button>
                {this.state.mood}
            </div>
        )
    }
}
