import { Link } from "react-router-dom";
import styled from "styled-components";


function Login() {
    return (
        <Wrapper>
            <div className="center" >
              <h1>login</h1>
                <form method="post" >
                   <div className="txt-field">
                    <input type="text" required/>
                    <span></span>
                    <label>Ism</label>  
                   </div>
                   <div className="txt-field" >
                    <input type="password" required/>
                    <span></span>
                    <label>Parol</label>    
                   </div>
                   <div className="pass">Parolni unutdingizmi?</div>
                    <input type="submit"   value="Login"/>
                   <div className="signub-link">
                        Not a number? <Link to="/signub">Singub</Link>

                   </div>
                </form>
                </div>
        </Wrapper>
    )
}
export default Login;

const Wrapper = styled.div`
        width: 100%;
        height: calc(100vh - 90px) ;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background: linear-gradient(120deg, #2980b9, #8e44ad);
        overflow: hidden;
        
        .center{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width :400px;
            background-color: white;
            border-radius: 10px;
                  
           h1 {
              text-align: center;
              padding: 0 0 20px 0;
              border-bottom: 1px solid #adadad;
              }
            form{
              padding:0 40px;
              box-sizing: border-box;
            }   
            .txt-field{
                  position: relative;
                  border-bottom: 2px solid #adadad;
                  margin: 30px 0;
            }
            input {
                  width: 100%;
                  padding: 0 5px;
                  height: 40px;
                  font-size: 16px;
                  border: none;
                  background: none;
                  outline: none;
            }
            span::before{
                  content: "";
                  position: absolute;
                  top: 30px;
                  left: 0;
                  width: 0%;
                  height: 2px;
                  background: #2691d9;
                  transition: 0.5s;
            }
            label{
                 position: absolute;
                 top: 50%;
                 left: 5px;
                 color: #adadad;
                 transform: translateY(-50%);
                 font-size: 16px;
                 pointer-events: none;
                 transition: 0.5s;
            }
            .txt-field input:focus ~ label,      
            .txt-field input:valid ~ label{
                  top: -5px;
                  color: #2691d9;
             }      
            .txt-field input:focus ~ span::before,      
            .txt-field input:valid ~ span::before{
               width: 100%;
             }
            .pass{
                  margin: -5px 0 20px 5px;
                  color: #a6a6a6;
                  cursor: pointer;
            }    
            .pass:hover{
                  text-decoration: underline;
            }
            input[type="submit"]{
                  width: 100%;
                  height: 50px;
                  border: 1px solid;
                  background: #2691d9;
                  border-radius: 25px;
                  font-size: 18px;
                  color:#e9f4fb;
                  font-weight:700;
                  cursor: pointer;
                  outline:none;
            } 
            .input[type="submit"]:hover{
                  border-color: #2691d9;
                  transition: 0.5s ;
            }
            .signub-link{
                  margin: 30px 0;
                  text-align: center;
                  font-size: 16px;
                  color: #666666;

                  a{
                        color: #2691d9;
                        text-decoration: none;
                        
                        :hover{
                              text-decoration: underline;
                        }
                  }
                  
            }

        }

 `;