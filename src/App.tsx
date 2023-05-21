import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainContent from "./Components/maincontent";
import Footer from "./Components/footer";
import Header from "./Components/header";
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
export default App;
