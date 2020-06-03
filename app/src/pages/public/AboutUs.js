import "pages/public/AboutUs.css"
import logo from "imgs/logo.png";
import guilherme from "imgs/guilherme.jpg";
import airan from "imgs/airan.jpg";
import vitor from "imgs/vitor.jpg";
import React from "react";

const AboutUs = (props) => {
    return (
        <div className="AboutUs row">
            <header className="theme-bgc header col s6 center">
                <div className="img-logo-wrapper">
                    <img src={logo} alt="logo" width="100%"/>
                    <h1 style={{margin: "1rem", color: "#423b3d"}}>FRETZ & FREEDOM</h1>
                    <h4 style={{fontWeight: "bold", letterSpacing: "2.4px"}}>CARGO OPTIMIZER</h4>
                    <a href="/login">Clique aqui para voltar a página de login!</a>
                </div>
            </header>
            <div className="col s6 container">
                <div className="row">
                    <div className="col s12">
                        <h4>Informações sobre os autores do projeto Fretz & Freedom</h4>
                    </div>
                    <div className="col s12">
                        <img src={guilherme} alt="Guilherme" width="100" height="100"></img>
                        <span>Guilherme Augusto de Souza - Estudante de Engenharia de Software da Univates</span>
                    </div>
                    <div className="col s12">
                        <img src={airan} alt="Airan" width="100" height="100"></img>
                        <span>Airan Iuri do Nascimento - Estudante de Engenharia de Software da Univates</span>
                    </div>
                    <div className="col s12">
                        <img src={vitor} alt="Vitor" width="100" height="100"></img>
                        <span>Vitor Olavo - Estudante de Engenharia de Software da Univates</span>
                    </div>
                </div>
            </div>           
        </div>
    )
};

export default AboutUs;