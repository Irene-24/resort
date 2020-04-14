import React , {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from "./Title";

//get all unique values
function getUnique(items,value) 
{
    return [...new Set(items.map(item => item[value]) )];    
}



export default function RoomsFilter({rooms}) 
{
    const context = useContext(RoomContext);
    const 
    {
        handleChange, 
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    let types =["all",...getUnique(rooms,'type')];
    let guests = getUnique(rooms,'capacity');

    types = types.map( (item,index) => <option key={index} value={item}>{item}</option>  );

    guests = guests.map( (item,index) => <option key={index} value={item}>{item}</option>  ) ;

    return (
        <section className="filter-container">
            <Title title="seach rooms" />
            <form className="filter-form">
                {/* select type  */}

                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type}
                    className="form-control"
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>

                 {/* select type end*/}

                  {/* select guest*/}

                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}>
                        {guests}
                    </select>
                </div>

                {/* select guest end*/}

                {/* room price */}
                <div className="form-group">
                <label htmlFor="price">Room price ${price}</label>
                    <input type="range" max={maxPrice} min={minPrice} name="price" id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* room price end*/}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">Room size <small>(max size : {maxSize} sqft)</small> </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" onChange={handleChange} className="size-input" min="0" value={minSize} />

                        <input type="number" name="maxSize" onChange={handleChange} className="size-input" max={maxSize} value={maxSize} min="0" />
                    </div>
                </div>
                {/* size end */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" onChange={handleChange} checked={breakfast} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" onChange={handleChange} checked={pets} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
             {/* extras end*/}

            </form>
        </section>
    )
}
