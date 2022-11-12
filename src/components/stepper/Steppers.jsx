// import React, { useState } from "react";
// import { Steps } from "antd";
// import {
//   ButtonStyled,
//   StepsAction,
//   StepsContent,
//   StepsStyled,
// } from "./StepsStyles";
// import { Hero } from "../Hero/Hero";
// import hero1 from "../../assets/images/hero1.svg";
// import hero2 from "../../assets/images/hero2.svg";
// import hero3 from "../../assets/images/hero3.svg";
// import { useNavigate } from "react-router-dom";
// const { Step } = Steps;

// const description = {
//   first:
//     "Choose what to eat choosing from a variety of restaurants from the list",
//   second: "Choose where you want to deliver by indicating on the map",
//   third: "We will deliver as soon as possible",
// };

// const steps = [
//   {
//     title: "First",
//     content: <Hero img={hero1} description={description.first} />,
//   },
//   {
//     title: "Second",
//     content: <Hero img={hero2} description={description.second} />,
//   },
//   {
//     title: "Third",
//     content: <Hero img={hero3} description={description.third} />,
//   },
// ];

// export const Steppers = () => {
//   const [current, setCurrent] = useState(0);

//   const next = () => {
//     setCurrent(current + 1);
//   };

//   const onChange = (value) => {
//     setCurrent(value);
//   };

//   const navigate = useNavigate();
//   const navigateToSignIn = () => {
//     navigate("/sign-in");
//   };

//   return (
//     <>
//       <StepsContent>{steps[current].content}</StepsContent>
//       <StepsStyled onChange={onChange} size="small" current={current}>
//         {steps.map((item) => (
//           <Step key={item.title} />
//         ))}
//       </StepsStyled>
//       <StepsAction className="steps-action">
//         {current < steps.length - 1 && (
//           <ButtonStyled onClick={() => next()} size="large">
//             Next
//           </ButtonStyled>
//         )}
//         {current === steps.length - 1 && (
//           <ButtonStyled onClick={navigateToSignIn} size="large">
//             Done
//           </ButtonStyled>
//         )}
//       </StepsAction>
//     </>
//   );
// };
