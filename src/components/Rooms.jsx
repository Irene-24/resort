import React from 'react';
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";
import RoomsContainer from "./RoomsContainer";

export const Rooms = () => 
{
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer />
      </>
    );
};

export default Rooms;
