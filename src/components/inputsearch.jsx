import styled from "styled-components"
import Love from "../rasmlar/love.svg"
import Cart from '../rasmlar/cart.svg'
import { Link } from "react-router-dom";

function Search (props) {
   
   
    // console.log(size)
    return (
        <Wrapper>
                 <input type="text" placeholder="Maxsulot qidirish . . . . ."  onKeyUp={props.seorchProducts}  />
                <div>
                     <img src={Love} alt="" srcset="" />  
                        <span>0</span>                           
                        <Link to="/cart"> <img src={Cart} alt="" srcset="" className="cartt"  />  </Link> 
                        <span>0</span>                           
                </div> 
                         

                
        </Wrapper> 
    )
}
export default Search;

const Wrapper = styled.div`
       padding: 10px;
       display: flex;
       input {
           width: 1000px;
           height: 50px;
           padding: 10px 20px ;
           border-radius: 10px;
           font-size: 20px;
           ::placeholder {
               color:  rgba(0, 0, 255, 2.2) ;
               font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
            
        }
        
        div{
            width: calc(100% - 1010px);
            display: flex;
            justify-content: flex-end;
            
            span{
                color: red;
                font-size: 25px;
                transform: translateY(-15%);
                /* border: 1px solid red; */
                border-radius: 50%;
            }
            img {
                width: 40px;
                height: 40px;
                margin-left: 50px;
                :hover{
                    transform: translateY(-4px);
                    transition: 0.5s;
                }
            }
         
        }
        
        
        @media (max-width: 412px) {
            input{
                width: 250px;
                z-index: 100;
         }
         div{
            width: calc(100% - 250px);
            display: flex;
            /* justify-content: flex-end; */
            
            span{
                color: red;
                font-size: 25px;
                /* transform: translateY(-15%); */
                /* border: 1px solid red; */
                /* border-radius: 50%; */
            }
            img {
                width: 40px;
                height: 40px;
                margin-left: 20px;
            }
         
        }
   }
`;