import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

    const [MobilMenu,setMobileMenu] = useState(false)

    return(
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="catgrories d-flex">
                        {/* <span className="fa-solid fa-border-all"></span> */}
                        <h4>
                            Categoriec <i className="fa fa-chevron-down"></i> 
                        </h4>
                    </div>

                    <div className="navlink">
                        <ul className={MobilMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)} >
                           <li>
                            <Link to="/">Home</Link> 
                           </li>
                           <li>
                            <Link to="/pages">Pages</Link> 
                           </li>
                           <li>
                            <Link to="/user">User account</Link> 
                           </li>    
                           <li>
                            <Link to="/vendor">Vendor account</Link> 
                           </li>    
                           <li>
                            <Link to="/track">Track my order</Link> 
                           </li>
                           <li>
                            <Link to="/contact">Contack</Link> 
                           </li>    
                        </ul>  

                        <button className="toggle" onClick={()=>setMobileMenu(!MobilMenu)}>
                         {
                            MobilMenu? <i className="fas fa-times close home-bth"></i> : 
                            <i className="fas fa-bars open"></i>
                         }    
                        </button> 
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar;