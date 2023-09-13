import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Checkout() {
  const navigate = useNavigate();

  const location = useLocation();
  return (
    <>
      Hi this is Checkout page. Please check the details
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate("/payment")}>Make Payment</button>
      {location.pathname}
      <br />
    </>
  );
}

export default Checkout;
