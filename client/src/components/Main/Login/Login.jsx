import React, { useState, useContext, useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Logo from "../Logo/Logo";
import { UserContext } from "../../../context/userContext";
import PDF from "../PDF";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn } = useContext(UserContext);

  const handleButtonClick = () => {
    const fetchUsers = async () => {
      const user = { email: email, password: password };

      if (isValidEmail(email)) {
        //peticion api para login con objeto usuario
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        if (response.status === 200) {
          setLoggedIn(true);
          navigate("/home");
        } else {
          alert("datos de acceso incorrectos , intentelo de nuevo");
        }
      } else {
        alert(
          "Por favor, ingrese un correo electrónico y una contraseña válidos."
        );
      }
    };
    fetchUsers();
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // const isValidPassword = (password) => {
  //   return password.length >= 6;
  // };
  const pdfContainerRef = useRef(null);

  const captureScreen = async () => {
    const pdfContainer = pdfContainerRef.current;

    if (pdfContainer) {
      const canvas = await html2canvas(pdfContainer);
      const imgData = canvas.toDataURL("image/png");
    } console.log("hello");
  };
  return (
    <section className="form_logo_container">
      <Logo />
      <article className="form_section">
        <p className="create_p">Inicia sesión</p>
        <form className="form_label">
          <input
            type="email"
            className="input_form"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input_form"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <br />

        <button
          id="button_login"
          className="form_button"
          type="button"
          onClick={handleButtonClick}
        >
          Continuar
        </button>
      </article>
      <button onClick={captureScreen}>Capturar pantalla</button>
      <PDFDownloadLink document={<PDF />} fileName=".pdf">
        <button>Descargar</button>
      </PDFDownloadLink>
    </section>
  );
};
export default Login;
