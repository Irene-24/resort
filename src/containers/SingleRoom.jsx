import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import defaultImg from "../assets/images/room-1.jpeg";

export default class SingleRoom extends Component 
{
    static contextType = RoomContext;
    state = 
    {
        id:this.props.match.params.id,
        defaultImg
    };
    render() 
    {
        const {getRoom} = this.context;
        const room = getRoom(this.state.id);
        if(!room)
        {
            return (
              <div className="error">
                <h3>Room not found</h3>
                <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
              </div>
            );
        }
        
        return (  
            <>        
           <StyledHero img={room.images[0]}>
               <Banner title={`${room.name}`}>
               <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
               </Banner>
           </StyledHero>
           <section className="single-room">
               <div className="single-room-images">
                   { room.images.slice(1).map( (img,index) => <img key={index} src={img} alt={room.name}/>  ) }
               </div>

               <div className="single-room-info">
                   <article className="desc">
                       <h3>details</h3>
                    <p>{room.description}</p>
                   </article>

                   <article className="info">
                       <h3>info</h3>
                    <h6>price : ${room.price}</h6>
                    <h6>size : {room.size} SQFT</h6>
                    <h6>max capacity : {room.capacity} {room.capacity > 1 ? "People" :"Person"}  </h6>
                    <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{room.breakfast && "free breakfast included"}</h6>
                   </article>

               </div>

           </section>

           <section className="room-extras">
               <h6>extras</h6>
               <ul className="extras">
        {room.extras.map((item,index)=> <li key={index}>- {item}</li> )}
               </ul>
           </section>
           </>
        )
    }
};
