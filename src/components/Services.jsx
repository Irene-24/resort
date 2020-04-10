import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component 
{
    state=
    {
        services:
        [
            {
                icon:<FaCocktail />,
                title:"Free cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, id!"
            },
            {
                icon:<FaHiking />,
                title:"Explore nature",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, magni"
            },
            {
                icon:<FaShuttleVan />,
                title:"Free shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima."
            },
            {
                icon:<FaBeer />,
                title:"Strogest Beer",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta."
            },
        ]
    };
    render() {
        return (
            <section className="services" >

                <Title title="services" />
                <div className="services-center">
                    {
                        this.state.services.map( (item,index) => 
                        {
                            return (
                              <article className="service" key={index}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                              </article>
                            );
                        } )
                    }
                </div>

            </section>
        )
    }
}
