import React, { Component, createContext } from 'react';

const RoomContext = createContext();
const RoomConsumer = RoomContext.Consumer;

class RoomProvider extends Component 
{
    state=
    {

    };
    render() {
        return (
            <RoomContext.Provider value="hello">
                {this.props.children}               
            </RoomContext.Provider>
        )
    }
}

export { RoomProvider,RoomConsumer, RoomContext };
