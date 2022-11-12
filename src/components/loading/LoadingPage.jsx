import logo from '../../assets/images/Logo.png'
import './loadingstyle.scss'

import React, { useEffect, useState } from 'react'
// import { Steppers } from '../stepper/Steppers';
import { useNavigate } from 'react-router-dom';
import Phone from '../session/Phone';


const LoadingPage = () => {

  const [loadingLogo, setLoadingLogo] = useState(true);

  const TimerSteps = () => {
    setTimeout(() => {
      setLoadingLogo(false);
    }, 3000);
  }

  useEffect(() => {
    TimerSteps();
  }, [])

  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate("/phone");
  };
  return (
    <>
    {
        loadingLogo ?
        <div className='img'>
          <img src={logo} alt='Logo Loading' />
        </div>
    :
      <Phone />
    // <Steppers />
    }
    </>
  )
}

export default LoadingPage