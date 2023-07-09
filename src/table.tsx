import React from "react";

function ResultTable(props: any) {
  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {props.res.map((items: any) => (
            <tr>
              <td>{items.username}</td>
              <td>{items.password}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
              <td>{items.address}</td>
              <td>{items.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
