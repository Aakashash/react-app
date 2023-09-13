import { useParams, useSearchParams } from "react-router-dom";

function UserDetails() {
  const data = useParams();

  const { userId } = useParams();

  const [searchparams, setSearchParams] = useSearchParams();

  const name = searchparams.get("filter");

  return (
    <>
      Hi this is UserDetails page <div>The user value is {data.userId}</div>
      <div>The user value is {userId}</div>{" "}
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        {" "}
        Filter check{" "}
      </button>
      {name}
    </>
  );
}

export default UserDetails;
