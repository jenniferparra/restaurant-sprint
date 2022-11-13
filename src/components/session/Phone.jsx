import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import './session.scss'
import { loginAsync, userRegisterAsync } from '../../redux/actions/userAction';
import Swal from 'sweetalert2'
import logo from "../../assets/images/Logo.png";


const Phone = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, displayName } = useSelector(state => state.user)

    useEffect(() => {
        if (error) {
            alert('Usuario o contraseña incorrecta')
        }
    }, [error])

    useEffect(() => {
        if (displayName) {
            navigate('home')
        }
        // else {
        //     navigate('register')
        // }
    }, [displayName])


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const submit = (data) => {
        console.log(data);
        dispatch(loginAsync(data.email));
    }
    return (
        <div className='container-fluid text-center'>
            <img className='mt-5' src={logo} alt='page logo' />
            <h2 className='mt-4 px-4'>Sign in</h2>
            <p className='px-4'>Login or create an account with your phone number to start ordering</p>
            <form className='pagecnt' onSubmit={handleSubmit(submit)}>
            <div>
                <label className=' d-grid '>
                    <input
                        className='border-0 border-bottom border-warning'
                        type="number"
                        placeholder="+1"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <span>El campo del celular es requerido</span>}
                </label>
                </div>
                <div className='d-grid btn_login'>
                    <button className='btn btn-warning mb-3 py-2 fw-semibold' type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};


export default Phone