import { Outlet } from "react-router";

function Users() {
  return (
    <>
      Hi this is Users page<div>User 1</div> <div>User 2</div>
      <div>User 3</div>
      <Outlet />
    </>
  );
}

export default Users;
