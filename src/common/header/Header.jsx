import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "../header/header.css"

function Header() {
    return(
        <>
         <Head />
         <Search />
         <Navbar />
        </>
    )
}
export default Header;