import React, { Component, createContext } from 'react';
import items from "./data";

const RoomContext = createContext();
const RoomConsumer = RoomContext.Consumer;

class RoomProvider extends Component 
{
    state=
    {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

    componentDidMount()
    {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( room => room.featured === true );

        this.setState( 
            {
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false
            }
         );
    }

    formatData = data =>
    {
        let formattedRooms = data.map( item => 
            {
                let id = item.sys.id;
                let images = item.fields.images.map( el => el.fields.file.url );
                let room = { ...item.fields, images , id  };
                return room;
            } );
        return formattedRooms
    }

    getRoom = slug =>
    {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find( room => room.slug === slug );

        return room;
    }

    render() 
     {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>
                {this.props.children}               
            </RoomContext.Provider>
        )
    }
}

export { RoomProvider,RoomConsumer, RoomContext };
