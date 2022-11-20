import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import './session.scss'
import { actionSignPhoneAsync, loginAsync, userRegisterAsync } from '../../redux/actions/userAction';
import Swal from 'sweetalert2'
import logo from "../../assets/images/Logo.png";


const Verification = () => {
    const dispatch = useDispatch();
    const [code, setCode] = useState("");

    const validateCode = ({target}) => {
        const codigo = target.value;
        setCode(codigo);
        if (codigo.lenght === 6) {
            dispatch(actionSignPhoneAsync(codigo))
        }
    }
    return (
        <div className='container-fluid text-center'>
        <img className='mt-5' src={logo} alt='page logo'/>
        <h2 className='mt-4 px-4'>Verification</h2>
                <p className='px-4 mb-0'>Enter the four-digit code from SMS</p>
                <span className='mb-3'>SMS not received. Send again?</span>
            <form className='pagecnt'>
                <label className=' d-grid '>
                    <input
                        className='border-0 border-bottom border-warning'
                        type="number"
                        onChange={validateCode}
                        value={code}
                    />
                </label>
                
                <div className='d-grid btn_login'>
                    <button className='btn btn-warning mb-3 py-2 fw-semibold' type='submit'>Verify code</button>
                </div>
            </form>
        </div>
    );
};


export default Verification