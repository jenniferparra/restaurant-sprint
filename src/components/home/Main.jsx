import React from 'react';
import { IoFastFoodSharp, IoPizzaOutline, IoIceCreamOutline } from "react-icons/io5";
import { GiFruitBowl, GiNoodles } from "react-icons/gi";
import restaurant from "../../assets/images/pardes.png";


const Main = () => {
    const filterbtn = [
        {
            id: 1,
            button: 'All',
        },
        {
            id: 1,
            button: 'Fast Food',
            icon: <IoFastFoodSharp />
        },
        {
            id: 1,
            button: 'Pizza',
            icon: <IoPizzaOutline />
        },
        {
            id: 1,
            button: 'Salad',
            icon: <GiFruitBowl />
        },
        {
            id: 1,
            button: 'Ice Cream',
            icon: <IoIceCreamOutline />
        },
        {
            id: 1,
            button: 'Pasta',
            icon: <GiNoodles />
        },
    ];

    return (
        <div>
            <aside>
                <p className="mt-3">Restaurants and cafes</p>
                <div className="btnstyle">
                    {filterbtn.map((filter) => {
                        return (
                            <div className="banner__item" key={filter.id}>
                                <button className="btn btnclick">
                                    <span className="me-3">{filter.icon}</span>
                                    <span>{filter.button}</span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </aside>
            <div className="mt-3 restaurant d-flex">
                <figure className="imgcnt">
                    <img className="restaurant__logo" src={restaurant} />
                </figure>
                <aside className="d-flex flex-column ms-3 aside">
                    <h5>Pardes Restaurant</h5>
                    <p className="mb-0"> Work time 09:30-21:00</p>
                    <p className="p_text mt-0">Before you 4$</p>
                </aside>
            </div>
        </div>
    )
}

export default Main