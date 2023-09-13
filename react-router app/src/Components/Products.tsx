import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      Hi this is Products page
      <div>
        <Link to="trending"> Trending Products</Link>
        <Link to="new"> New Products</Link>
        <Outlet />
      </div>
    </>
  );
}

export default Products;
