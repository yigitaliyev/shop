import { Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../rasmlar/home.png";
import About from "../rasmlar/about.png";
import Servis from "../rasmlar/servis.svg";
import Aloqa from "../rasmlar/aloqa.svg";
import Login from "../rasmlar/login.svg";
import { useState } from "react";



function RightNav({open}) {
    return(
        <Wrapper open={open}>
            <div onClick={() => (!open)} >
                 <img src={Home} alt="" srcset="" />
                 <Link to="/">Home</Link>
            </div>
            <div>
                <img src={About} alt="" srcset="" />
                 <Link to="/">About</Link>
            </div>
            <div>
                <img src={Servis} className="servis" alt="" srcset="" />
                 <Link to="/">Servis</Link>
            </div>
            <div>
                <img src={Aloqa} className="aloqa" alt="" srcset="" />
                 <Link to="/">Contact us</Link>
            </div>
            <div>
                <img src={Login} className="servis" alt="" srcset="" />
                 <Link to="/login">Login</Link>
            </div>
            <div>
                <img src={Servis} className="servis" alt="" srcset="" />
                 <Link to="/signub"  >Signup</Link>
            </div>
        </Wrapper>
    )
}
export default RightNav;

const Wrapper = styled.div`
        list-style :none ;
        display: flex;
        flex-flow: row nowrap;

        img {
            display: none;
        }
        a:hover{
            color: red;
        }

        @media (max-width: 421px) {
            flex-flow: column nowrap;
            background-color: rgba(0, 0, 255, 1);
            position: fixed;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%  )'};
            top: 0;
            right: 0;
            width: 300px;
            height: 100vh;
            z-index: 5 ;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;
            padding: 50px;
           
            div{
                margin: 0 20px 40px 5px;
            }

            img {
                display: inline;
                width: 20px;
                margin: 0px 10px 0 5px;
                color: black;
                
            }
            .servis{
                width: 35px;
                margin: 0;
                padding-right: -10px ;
            }

            a {
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                margin: 20px ;
                font-size: 80px;
                color: white;
            }
       }
`;