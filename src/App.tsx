import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainContent from "./Components_Firstweek/maincontent";
import Footer from "./Components_Firstweek/footer";
import Header from "./Components_Firstweek/header";
import Contacts from "./Props_Firstweek_components/contacts";
import Data from "./map_fuctn/data";
import Name from "./map_fuctn/name";
import Contact_data from "./contact_data";

// function App() {
//   return (
//     <div className="contacts">
//       {/* <Header />
//       <MainContent />
//       <Footer /> */}
//       <Contacts
//         img="./images/felix.png"
//         name="Felix"
//         phone="678-1234"
//         email="mr.whiskaz@catnap.meow"
//         on="yes"
//       />
//       <Contacts
//         img="./images/fluffykins.png"
//         name="Fluffykins"
//         phone="(212) 555-2345"
//         email="fluff@me.com"
//         on="yes"
//       />
//       <Contacts
//         img="./images/mr-whiskerson.png"
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//         on="no"
//       />
//       <Contacts
//         img="./images/pumpkin.png"
//         name="Pumpkin"
//         phone="(0800) CAT KING"
//         email="pumpkin@scrimba.com"
//         on="yes"
//       />
//     </div>
//   );
// }
// export default App;

/* Below code is using map function to do the display which the above code did */

// function App() {
//   const new_data = Data.map((data) => {
//     return <Name name={data.name} company={data.company} />;
//   });

//   return (
//     <>
//       <Contacts
//         img="./images/pumpkin.png"
//         name="Pumpkin"
//         phone="(0800) CAT KING"
//         email="pumpkin@scrimba.com"
//       />
//       hello world
//       {new_data}
//     </>
//   );
// }

// export default App;

/* Below code is using map function to send entire object as props */

function App() {
  const cards = Contact_data.map((items) => {
    return (
      <Contacts
        key={items.id}
        items={items}
        // {...item}
      />
    );
  });
  return (
    <div>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
