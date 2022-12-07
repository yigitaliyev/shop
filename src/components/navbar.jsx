import styled from "styled-components";
import Burger from "./Burger";

function Navbar() {
    return (
        <Wrapper>
            <div  >
                <h3>Sherzod: +94.684.87.23  </h3>
                <h3>Bekzod: +94.136.60.32  </h3>
            </div>
            <div className="links">
                 <Burger /> 
            </div>

        </Wrapper>
    )
}

export default Navbar;

const Wrapper = styled.div`
    width: 100%;
    height: 90px;
    background-color: rgba(0, 0, 255, .2);
    padding: 10px;
    display: flex;
    justify-content: space-between;
              
    h3 {
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-style: oblique;
        padding: 5px;
    }
    .links{
       padding: 20px;
      
          a{
            text-decoration: none;
            padding: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 20px;
          }
    }   

    @media (max-width: 412px){
           padding: 0;

           h3 {
        font-size: 10px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-style: oblique;
        padding: 15px 0 0 5px;
    }

         .links {
            padding: 0;
            flex-flow: column nowrap;
            z-index: 1000;
            height: 100vh;
            width: 100%;
           
            a {
                padding: 0;
            }
        }

    }

`;