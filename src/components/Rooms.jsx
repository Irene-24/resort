import React from 'react';
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";

export const Rooms = () => 
{
    return (
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    );
};

export default Rooms;
