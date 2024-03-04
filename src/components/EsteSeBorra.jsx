import { useState } from "react";
import Frame129 from "../assets/Frame129.png"
import NavbarPopUp from "./NavbarPopUp";
import Boton from "./Boton";
import Login from "./Login";

function EsteSeBorra({callbacks}) {

    const mystyle = {
        width: "90%",
        margin: "100px auto",
        display: "flex",
        justifyContent: "center"
        };

  return (
    <div style={mystyle}>
      <img src={Frame129} width="60%"/>

      {/* Esta línea es importante */}
      <Boton callback={()=>callbacks()} text={"Login"}/> 
    </div>
  )
}

export default EsteSeBorra