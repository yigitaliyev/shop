import styled from "styled-components";
import Love from "../rasmlar/love.svg"
import Cart from "../rasmlar/cart.svg"

function Product({product, bosildi } ) {

//   function bosildi() {
//     console.log(product)
// }

  return (
    <Wrapper>
      <div className="img-box"  >
        <div>
          <img className="cartt" onClick={() => bosildi(product)}src={Cart}/>
          <img src={Love}  className="love" />
        </div>
        <img src={product.image} />
      </div>
      <h1>{product.Name}</h1>
      <div className="prais">
        <p>Narxi: {product.price}</p>
      </div>
    </Wrapper>
  )
}
export default Product;

const Wrapper = styled.div`
       height: 400px;
       border: 2px solid rgba(0, 0, 255, .2);
       box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
       /* z-index :-1 ; */
       :hover{
         transform: translateY(-10px);
         transition: 0.2s;
       }
          .img-box {
           width: 100%;
           height: 180px;
          
            div{
              width: 50px;
              position: absolute;
              }
          }
              img {
                max-width: 100%;
                z-index: 10000000;
                max-height: 100%;
                justify-content: center;
                align-items: center;
                }
                .cartt{
                  width: 50px;
                  height: 50px;
                  border: none;
                  z-index: 1000000;
                  background-color: white;
                  cursor: pointer;
                  background-color: red;
                }
                .love{
                  width: 50px;
                  height: 40px;
                  
                }
`; 