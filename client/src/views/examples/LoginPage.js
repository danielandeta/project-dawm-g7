import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Logo from '../../assets/img/logo_natural.png';
//import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
  let history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const login = () => {
    const data = {email: email, password: password}
    axios.post("http://localhost:3001/auth/login", data).then((response)=>{
      if (response.data.error) {
        alert(response.data.error)
      } else {
        sessionStorage.setItem("accessToken", response.data) // Guardo el token en el sessionStorage si todo sale bien
        history.push("/")
      }
    })
  }


  return (
    <>
    <IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/mermeladas.jpeg").default + ")",
          }}
        ></div>
        <div className="content">
          <label> Email: </label>
          <input type="text" onChange={(event) => {setEmail(event.target.value)}} />
          <label> Password: </label>
          <input type="password" onChange={(event) => {setPassword(event.target.value)}} />

          <button type="submit" onClick={login}>Login</button>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LoginPage;
