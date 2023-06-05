import React from "react";

// function Contacts(props: any) {
//   //console.log(props);
//   let p = props.on;
//   return (
//     <div className="contact-card">
//       <img src={props.img} />
//       <h3>{props.name}</h3>
//       <div className="info-group">
//         <img src="./images/phone-icon.png" />
//         <p>{props.phone}</p>
//       </div>
//       <div className="info-group">
//         <img src="./images/mail-icon.png" />
//         <p>{props.email}</p>
//       </div>
//       <div className="info-group">{p === "no" && <p> SOLD OUT </p>}</div>
//     </div>
//   );
// }

function Contacts(props: any) {
  let badgeText;
  if (props.items.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.items.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.items.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.items.stats.rating}</span>
        <span className="gray">({props.items.stats.reviewCount}) • </span>
        <span className="gray">{props.items.location}</span>
      </div>
      <p className="card--title">{props.items.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.items.price}</span> / person
      </p>
    </div>
  );
}

export default Contacts;

// if we are using spread operator, we can use props directly because it spreads the value to the respective arguements

/*
   function Contacts(props: any) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.ilocation}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
*/
