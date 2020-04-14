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
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };

    componentDidMount()
    {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( room => room.featured === true );
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState( 
            {
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price:maxPrice,
                maxPrice,
                maxSize
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

    handleChange = event =>
    {
        const {type,value,name} = event.target;

        console.log(type,name,value);
    }

    filterRooms = () =>
    {
        console.log('output1');
    }

    render() 
     {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}               
            </RoomContext.Provider>
        )
    }
}

export function withRoomConsumer(Component) 
{
    return function consumerWrapper(props) 
    {
        return (
                <RoomConsumer> 
                    { value => <Component {...props} context={value}/>} 
                </RoomConsumer>
        );
    }
    
}

export { RoomProvider,RoomConsumer, RoomContext };
