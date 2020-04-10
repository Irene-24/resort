import React from 'react';
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";

export default function Error() {
    return (
        <Hero>
        <Banner
          title="404"
          subttile="Page not found"
        >
          <Link to="/" className="btn-primary">
           Back to main page
          </Link>
        </Banner>
      </Hero>
    )
}
