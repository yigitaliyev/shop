import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Search() {
   window.addEventListener("scroll", function(){
    const search = document.querySelectorAll(".search")
    search.classList.toggle("active", window.scrollY > 100)
   })

    return(
     <>
       <section className="search">
          <div className="container c_flex">
              <div className="logo width">
                <img src={logo}/>
              </div> 

              <div className="search-box f_flex">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search and hit enter..." />
                <span>All Category</span> 
              </div>

              <div className="icon f_flex width">
                <i className="fa fa-user icon_circle"></i> 
                 <div className="cart">
                    <Link>
                     <i className="fa fa-shopping-bag icon-circle"></i>
                     <span>0</span>
                    </Link>
                 </div>  
              </div>
          </div>
       </section>    
     </>
    )
}
export default Search;