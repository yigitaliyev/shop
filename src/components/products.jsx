import { useState } from "react";
import styled from "styled-components";
import Corusel from "./corusel";
import Search from "./inputsearch";
import Product from "./product";
import  {products}  from "../productdata"
import { Link } from "react-router-dom";
import Telifon from "../rasmlar/telifon.svg"
import Adres  from "../rasmlar/adres.svg"
import { useEffect } from "react";


function Products({bosildi}) {
    const [seorch, setseorch] = useState("");
    const [cart, setcart] = useState([])
    
    // function bosildi() {
    //     console.log(products)
    // }
    
  
    
    return (
        <Wrapper>
            <div className="sorch">

            <Search  seorchProducts={({target}) => setseorch(target.value)}  />       
            </div>
             {/* <Corusel /> */}
              <ProductBox>
                 {products.filter((products) =>products.Name.toLowerCase().includes(seorch.toLocaleLowerCase()))
                  .map(product =>  <Product product = {product} key={product.id} bosildi={() => bosildi(product)} />)}
              </ProductBox>   
                <About>
                 <div className="container">
                     <div>
                        <h2>Endi bozorga borishga hojat yo'q</h2>
                        <p>Bizda qulay narxlar va uyga <br/> yetkazib berish xizmati mavjud</p>
                     </div>
                     <div>
                        <h2>Tez yetkazib berish</h2>
                        <p>Bizning xizmatlarimiz sizni ajablantiradi</p>
                     </div>
                     <div>
                        <h2>Siz uchun qulaylik</h2>
                        <p>Nosozlik yuzaga keganda tez rasmilashtirish va qaytarish kafolati</p>
                     </div>
                     <div>
                        <h2>Bo'lib to'lash</h2>
                        <p>3, 6, 9, 12 oy davomida oldindan to'lovsiz </p>
                     </div>
                 </div> 
                 <div className="infos" >
                     <div className="info" >
                         <h2>Ma'lumitlar</h2>
                         <Link to="/">Biz haqimizda</Link> 
                         <Link to="/">Yordam</Link> 
                         <Link to="/">To'lovni qaytarish va tavarni almashtirish</Link> 
                         <Link to="/">Tavarni yetkazish va to'lov shartlari</Link> 
                     </div>
                     <div className="aloqa" >
                        <h2>Biz bilan aloqa</h2>
                        <div className="telifon" >
                          <img src={Telifon} alt="" srcset="" />
                          <p>+99894 136 60 32</p>
                        </div>
                        <div className="adres" >
                          <img src={Adres} alt="" srcset="" />  
                          <p>Yashnabod Toshkent</p> 
                        </div>
                     </div>
                     <div>
                        <h2>Biz ishtimoiy tarmoqlarda:</h2>
                     </div>
                 </div>
                </About>          
        </Wrapper>
    )
}

export default Products;

const Wrapper = styled.div`
     justify-content: center;
     text-align :center;
     align-items: center;
       .sorch{
       text-align: start;
       }
`;
const ProductBox = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    @media(max-width:412 ){
        margin: 10px;
    }
`;

const About = styled.div`
       width: 100%;
       height: 600px;
       background-color: rgba(0, 0, 255, .2);
       padding: 40px;
       .container{
           width: 100%;
           height: 150px;
           background-color: white;
           border-radius: 20px;
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(100px, 4fr));
           padding: 20px;
           gap: 10px;

           div{
           
            h2{
                font-size: 25px;
                padding: 8px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
            p{
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size : 20px;
                font-weight: 700;
                color: #949191;
            }
           }

       }
       .infos{

        width: 100%;
        height: 350px;
        /* background-color: red; */
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));
            
            .info{
              
              h2 {
                  padding-bottom: 20px;
                  color: #5d5f6f;
                  font-size: 40px;
                  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                }
                a {
                  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                  display: block;
                  color:#5d5f6f;
                  font-weight: 600;
                  font-size: 25px;
                  margin: 10px;
                  text-decoration: none;
                 }
             }
             .aloqa{
                 
                   h2{
                    padding-bottom: 20px;
                    color: #5d5f6f;
                    font-size: 40px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                   }

                .telifon{
                      display: flex;
                      justify-content: center;
                      margin-bottom:30px ;
                      p{
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        font-size: 25px;
                        font-weight: 600;
                        color: #5d5f6f;
                        margin-left: 30px;
                      }
                     }
                .adres{
                    display: flex;
                    justify-content: center;
                }

                img{
                    width: 30px;
                    height: 30px;
                }
                p{
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        font-size: 25px;
                        font-weight: 600;
                        color: #5d5f6f;
                        margin-left: 30px;
                      }
                 
             }
          
        
       }
`;