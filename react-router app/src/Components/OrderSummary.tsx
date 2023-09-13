import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function OrderSummary() {
  const navigate = useNavigate();
  const location = useLocation();

  // if you use / in front of the route in navigate it will navigate from the home like /checkout
  // if you dont use / it will search from the Components like ordersummary/checkout

  // relative links just searches from the parent (we  give directly without providing /)
  // absolute links searches from the root (we will be giving /q)
  return (
    <>
      Order Placed!!! from OrderSummary page
      <br />
      <button onClick={() => navigate("/checkout", { replace: true })}>
        {" "}
        Check Out for Payment{" "}
      </button>
    </>
  );
}

export default OrderSummary;
