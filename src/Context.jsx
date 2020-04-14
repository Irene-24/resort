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
        let minPrice = Math.min(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState( 
            {
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price:maxPrice,
                maxPrice,
                minPrice,
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
        const {name} = event.target;
        const value = event.target.type === "checkbox" ? event.target.checked :  this.formatInput(event.target.value);

        this.setState({[name]:value},this.filterRooms);
    }

    formatInput = value =>
    {
        if(isNaN(value)) return value;
        return Number(value);
    }

    filterRooms = () =>
    {
        let {
            rooms ,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;

        let tempRooms = [...rooms];

        if(type !== "all" )
        {
            tempRooms = tempRooms.filter( room => type === room.type );           
        }

        if( capacity !== 1 )
        {
            tempRooms = tempRooms.filter( room => capacity === room.capacity );
        }

        tempRooms = tempRooms.filter( room => room.price <= price);

        tempRooms = tempRooms.filter( room =>  room.size >= minSize && room.size <= maxSize);

        if(pets)
        {
            tempRooms = tempRooms.filter( room => room.pets === pets);
        }

        if(breakfast)
        {

            tempRooms = tempRooms.filter( room => room.breakfast === breakfast);
        }

        this.setState({sortedRooms : tempRooms});

       
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
