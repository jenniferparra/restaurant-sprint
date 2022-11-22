import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionFilterPlatesAsync } from '../../redux/actions/restaurantAction';
import { SlArrowLeft } from "react-icons/sl";
import logo from "../../assets/images/pardes-logo-rest.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Rate } from 'antd';
import './details.scss'

const Details = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { restaurant } = useSelector((store) => store.restaurant);
    const { plates } = useSelector((store) => store.restaurant);
    console.log(plates)
    // console.log(platillos)
    const buttonFiltered = (searchValue) => {
        const searchParam = "type";
        dispatch(actionFilterPlatesAsync(searchParam, searchValue));
    };
    const back = () => {
        navigate('/home')
    }
    const platesFiltered = (element) => {
        let searchValue = element.name
        let searchParam = 'name'
        dispatch(actionFilterPlatesAsync(searchParam, searchValue))
        navigate('/plates')
    };
    const filterbtn = [
        {
            id: 1,
            button: 'All',
        },
        {
            id: 2,
            button: 'Salad',
        },
        {
            id: 3,
            button: 'Sweets',
        },
    ];

    return (
        <div className='px-3'>
            {
                restaurant.map((element, index) => {
                    let puntaje = 0;
                    if (element.rate === 1) {
                        puntaje = '⭐'
                    } if (element.rate === 2) {
                        puntaje = '⭐⭐'
                    } if (element.rate === 3) {
                        puntaje = '⭐⭐⭐'
                    } if (element.rate === 4) {
                        puntaje = '⭐⭐⭐⭐'
                    } if (element.rate === 5) {
                        puntaje = '⭐⭐⭐⭐⭐'
                    }
                    return (
                        <div>
                            <div className='d-flex restaurant'>
                                <SlArrowLeft onClick={back} className='mt-3' size={20} />
                                <img src={logo} className='mx-auto my-3' />
                            </div>
                            <div key={index} className='d-flex cnt'>
                                <figure className="logocnt">
                                    <img className="logo" src={element.img} />
                                </figure>
                                <div className='d-flex flex-column ms-3'>
                                    <h5 >{element.name}</h5>
                                    <p>{element.description}</p>
                                    <p>{puntaje}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div >
                <div className="d-flex justify-content-around mb-3">
                    {filterbtn.map((filter) => {
                        return (
                            <div className="banner__item" key={filter.id} >
                                <button className="btn btnclick"
                                    onClick={() => {
                                        buttonFiltered(filter.button);
                                    }}>
                                    <span className="me-3">{filter.icon}</span>
                                    <span>{filter.button}</span>
                                </button>
                            </div>
                        );
                    })
                    }
                </div>
            </div>

            <section className='d-flex flex-wrap'>
                {
                    plates.map((element, index) => {
                        return (
                            <div className='col-6' onClick={() => { platesFiltered(element) }}>
                                <img src={element.img} className='rounded mb-2 plate__img' />
                                <p className='mb-0'>{element.name}</p>
                                <p>{element.price}</p>
                            </div>)
                    })
                }
            </section>
        </div>
    )
}

export default Details