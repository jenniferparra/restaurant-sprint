import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useDispatch, useSelector } from 'react-redux';
// import './style.scss'
import { loginAsync, userRegisterAsync } from '../../redux/actions/userAction';
import Swal from 'sweetalert2'
import logo from "../../assets/images/Logo.png";


const Verification = () => {
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
        <div className='container-fluid pagecnt text-center'>
        <img className='mt-5' src={logo} alt='page logo'/>
        <h2 className='mt-4 px-4'>Verification</h2>
                <p className='px-4 mb-0'>Enter the four-digit code from SMS</p>
                <span className='mb-3'>SMS not received. Send again?</span>
            <form onSubmit={handleSubmit(submit)}>
                <label className=' d-grid '>
                    <input
                        className='border-0 border-bottom border-warning'
                        maxLength="4"
                        type="number"
                        placeholder="+1"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <span>El campo del celular es requerido</span>}
                </label>
                
                <div className='d-grid btn_login'>
                    <button className='btn btn-warning mb-3 py-2 fw-semibold' type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};


export default Verification