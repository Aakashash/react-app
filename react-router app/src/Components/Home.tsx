import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import UserDetails from "./Users/UserDetails";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      Hi this is Home page
      <br />
      <button onClick={() => navigate("ordersummary")}> Place Order </button>
      <br />
    </>
  );
}

export default Home;
