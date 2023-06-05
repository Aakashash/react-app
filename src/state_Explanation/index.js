import React from "react";
import ReactDOM from "react-dom";

// example to understand state - state is nothing but the values stored within the component.

function App() {
  const thingsArray = ["Thing 1", "Thing 2"];
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>); // we are updating the thingsElements but the array is not being rendered

  function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`;
    thingsArray.push(newThingText);
    console.log(thingsArray);
  }
  // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>) --> even if we place this statement here it wont work
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

// if we want to render the array whenever the array changes then we need to use state.

function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]); // spread operator used here
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

// state change in objects

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

  function toggleFavorite() {
    console.log("Toggle Favorite");

    setContact((prevState) => {
      return { ...prevState, isFavorite: !prevState.isFavorite };
    });
  }

  // another way to update the value using setContact

  function toggleFavorite() {
    console.log("Toggle Favorite");

    setContact((prevState) => ({
      // using ( ) and indicating it as JS object
      ...prevState,
      isFavorite: !prevState.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" />
        <div className="card--info">
          <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
