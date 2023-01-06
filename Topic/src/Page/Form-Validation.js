import React from "react";

const FormValidation = () => {

  function Subbmit(e) {
    return
    <>
     {e.preventDefault()}
     {alert("clicked")}
     </>
  }
  return (
    <>
      <div className="center mt-5 mb-5">
        {/* Form code */}
        <form onSubmit={Subbmit}>
          <label>userName</label> <br />
          <input type="text" />
          <br /> <br />
          <label>Password</label> <br />
          <input type="password" />
          <br /> <br />
          <button className="btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default FormValidation;
