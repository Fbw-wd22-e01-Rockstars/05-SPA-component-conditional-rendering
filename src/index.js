import React from "react";
import ReactDOM from "react-dom";

const Alert = () => {
  const colorClasses = {
    color: "red",
	text4Red:"OMG! Something really bad has happended!",
	text4Orange:"Well, it is not that bad after all!"
  };
  //your component here

  return (

    <>
    {colorClasses.color==="red"?  <div class="alert alert-danger" role="alert">
        OMG! Something really bad has happended!
    </div>:  <div class="alert alert-warning" role="alert">
      Well, it is not that bad after all!
    </div> }
    </>

   /*  <div className={ `alert alert-${colorClasses.color==="red"?"danger":"warning"}` }  role="alert">
    {colorClasses.color==="red"? colorClasses.text4Red: colorClasses.text4Orange}

      </div> */
  )


};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
  <Alert/>,
  document.getElementById("root")
);
