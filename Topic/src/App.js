import React, { useRef, useState } from "react";
import ClickEvent from "./Page/Click-Event";
import Get from "./Page/Get-Input";
import State from "./Page/State";
import GetFormData from "./Page/Get-form-data";
// import FormValidation from './Page/Form-Validation';
import HideShowToggle from "./Page/Hide-show-toggle";
// import Revise from './Page/Revise';
import Props from "./Page/Props";
import FunProps from "./Page/FunProps";
// import ConditionalReRender from './Page/ConditionalReRender';
import FormValidation from "./Page/FormValidation";
import ConstructorLCM from "./Page/ConstructorLCM";
import RenderLCM from "./Page/RenderLCM";
import CompDidMount from "./Page/CompDidMount";
import UseEffecHook from "./Page/UseEffectHooK";
import MapFunction from "./Page/MapFunction";
import NestedMapFunction from "./Page/NestedMapFunction";
import MapWithProps from "./Page/MapWithProps";
// import LiftStateUp from './Page/LiftStateUp';
import PureComp from "./Page/PureComponent";
import PureComp2 from "./Page/PureComponent2";
import UseRef from "./Page/UseRef";
import UseRef2 from "./Page/UseRef2";
import ForWardRef from "./Page/ForWordRef";
import UnControlledComp from "./Page/ControlledComp";
import ControlledComp from "./Page/ControlledComp";
import HOC from "./Page/HOC";
import Pdf from "./Page/Pdf";
import GetApi from "./API/GetApi";
// import App2 from "./Revise/App2";
import RouterApp from "./React Router/RouterApp";
import HomeContainer from "./Container/HomeContainer";
import ApiApp from "./API/ApiApp";
import PreviousState from "./Page/PreviousState";
import PreviousProps from "./Page/PreviousProps";
import StateWithObj from "./Page/StateWithObj";
import NavBarBr from "./React Bootstrap/NavBarBr";
import ResumeOne from "./Test/Resume";
import ResumeTwo from "./Test/Resume2";

function App() {

  // Function Props and Variable
  const [like, setLike] = useState(0);
  const [like2, setLike2] = useState(0);
  const [perCount , setPreCount] = useState(0)
  const Like = () => {
    return <>{setLike(like + 1)}</>;
  };
  const Like2 = () => {
    return <>{setLike2(like2 + 1)}</>;
  };
  // Passing Props for Render , Life Cycle Method
  const [name, setName] = useState("aatish");
  // Forward Ref
  const inputRef = useRef();
  // Forward Ref Function
  function refFun() {
    // console.log("ref is called")
    inputRef.current.style.backgroundColor = "black";
  }

  return (
    <>
      {/* Test */}
      <ResumeOne />
      <ResumeTwo />
      {/* React Bootstrap Navbar */}
      {/* <NavBarBr /> */}
      {/* Redux */}
      {/* <ApiApp /> */}
      {/* <HomeContainer /> */}
      {/* React Router */}
      <RouterApp />
      {/* <App2 /> */}
      {/* <GetApi /> */}
      <ClickEvent />
      <State />
      <Props name="aatish" branch="CSe" year="3rd" />
      <Props name="raj" branch="ka to pata nahe" year="chal raha hai" />
      <FunProps fun={Like} name="aatish" l={like} />
      <FunProps fun={Like2} name="raj" l={like2} />
      <Get />
      <GetFormData />
      <HideShowToggle />
      {/* <ConditionalReRender/> */}
      <FormValidation />
      <ConstructorLCM />
      <RenderLCM name={name} />
      <button
        style={{ textAlign: "center" }}
        onClick={() => {
          setName("raj");
        }}
      >
        Update Now
      </button>{" "}
      <hr />
      <CompDidMount />
      <UseEffecHook />
      <MapFunction />
      <NestedMapFunction />
      <MapWithProps />
      {/* <MapWithProps2 /> */}
      {/* Dought :- <LiftStateUp /> */}
      <PureComp />
      <PureComp2 />
      <UseRef />
      <UseRef2 />
      <ForWardRef dataRef={inputRef} />
      <button onClick={refFun}> Click</button>
      <hr />
      <ControlledComp />
      <UnControlledComp />
      <HOC />
      <Pdf />
      <PreviousState />
      <PreviousProps data={perCount} />
      <button style={{marginLeft:600}} onClick={() => {setPreCount(Math.floor(Math.random()*100))}}>Click</button>
      <hr />
      <StateWithObj />
    </>
  );
}

export default App;
