import { Link, NavLink } from "react-router-dom";

// navlink is just like link but it has few feature which can be used to style for better styling
// it has a built-in class called active so we can use the class to style the element

function Navbar() {
  const navstyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
    };
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to={"/about"} style={navstyle}>
          About
        </NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <Link to={"Products"}> Products</Link>
        <Link to={"users"}> Users</Link>
      </nav>
    </>
  );
}

export default Navbar;
