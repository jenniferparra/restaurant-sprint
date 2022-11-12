import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import './style.scss'
import { userRegisterAsync } from '../../redux/actions/userAction';
import Swal from 'sweetalert2'


const Register = () => {
    const dispatch = useDispatch();

    const { error } = useSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const submit = (data) => {
        if (data.password1 === data.password2) {
            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password1,
            };
            dispatch(userRegisterAsync(newUser));
            if (error) {
                alert("hay error");
            } else {
                alert("usuario creado exitosamente");
            }
            console.log(data);
        } else {
            Swal.fire(
                '',
                'Las contraseñas no coinciden',
                'error'
            )
        }
    }
    const ValidatePass = (value) => {
        if (value.length < 8) {
            return "La contraseña debería contener al menos 8 caracteres";
        } else if (value.length > 16) {
            return "La contraseña debe contener menos de 16 de caracteres";
        } else {
            return true;
        }
    };

    return (
        <div className='container-fluid pagecnt '>
            <h1 className='mt-5'>Create account</h1>

            <form onSubmit={handleSubmit(submit)}>
                <label className=' d-grid mb-2 mt-5'>
                    <input
                        className='border-0 border-bottom border-warning py-2'
                        type="text"
                        placeholder="Nombre"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span>El campo del nombre es requerido</span>}
                </label>
                <label className=' d-grid mb-2'>

                    <input
                        className='border-0 border-bottom border-warning py-2'
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.phone && <span>El campo del email es requerido</span>}
                </label>

                <label className=' form-floating d-grid mb-2'>
                <input
                        className='border-0 border-bottom border-warning py-2'
                        type="password"
                        placeholder="Contraseña"
                        {...register("password1", { validate: ValidatePass })}
                    />
                    {errors.password1 && <span>{errors.password1.message}</span>}
                </label>
                <label className=' d-grid mb-2'>
                    <input
                        className='border-0 border-bottom border-warning py-2'
                        type="password"
                        placeholder="Confirmar contraseña"
                        {...register("password2", { validate: ValidatePass })}
                    />
                    {errors.password2 && <span>{errors.password2.message}</span>}
                </label>

                <div className='d-grid btn_login2'>
                    <button className='btn btn-warning mb-3 py-2 fw-semibold' type='submit'>Register</button>
                </div>
            </form>
        </div>
    );
};


export default Register