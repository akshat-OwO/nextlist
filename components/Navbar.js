import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/ninjas" >Ninja Listing</Link>
        </nav>
    );
}
 
export default Navbar;