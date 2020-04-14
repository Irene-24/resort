import React from 'react';
import { RoomConsumer } from "../Context";
import RoomsFilter  from "./RoomsFilter";
import RoomsList  from "./RoomsList";
import Loading from "./Loading";

export default function RoomsContainer() 
{
    return (

        <RoomConsumer>
            { value => 
            
                {
                    const {loading,sortedRooms,rooms} = value;
                    if(loading)
                    {                       
                        return <Loading />;
                    }
                    return (
                        <>
                            container
                            <RoomsFilter rooms={rooms}/> <RoomsList rooms={sortedRooms}/>
                        </>
                    );
                }
            }
        </RoomConsumer>


    )
}
