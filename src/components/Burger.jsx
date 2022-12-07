import { useState } from "react";
import styled from "styled-components";
import RightNav from "./Raiyt";


function Burger() {

    const [open, setopen] = useState(false)
   return (
    <>
      
    <Wrapper open={open}  onClick={() => setopen(!open)} >
            <div></div>
            <div></div>
            <div></div>
    </Wrapper>
    <RightNav open={open} />
          
    </>
   )
}
export default Burger;

const Wrapper = styled.div`
   
   @media(max-width:412px) {
    width: 2rem;
   height: 2rem;
   position: fixed;
   top: 15px;
   right: 30px;
   display: flex;
   justify-content: space-around;
   flex-flow: column nowrap;
   z-index: 10;
   div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? "black" : "#333"};
    transform-origin: 1px;
    border-radius: 5px;
    transition: 0.5s;

   &:nth-child(1){
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
   }
   &:nth-child(2){
    transform: ${({ open }) => open ? 'translateX(100%)':'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
   }
   &:nth-child(3){
    transform: ${({ open }) => open ? 'rotate(-45deg)':'rotate(0)'};
   }

      }   

  }
`;