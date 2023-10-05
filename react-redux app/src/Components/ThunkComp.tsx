import React from "react";
import {
  fetcherror,
  fetchuserdata,
  fetchusers,
  test,
  lol,
} from "../Actions/Action";
import { connect } from "react-redux";

import Store from "../Store/ThunkStore";

class ThunkComp extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.loading ? <p>Loading.....</p> : ""}
        <h1>{Store.getState().errormsg}</h1>
        <button className="green" onClick={this.props.fetch}>
          {" "}
          Press for Users
        </button>
        {lol(this.props.data.users)}

        {this.props.data.users.map((user) => (
          <ul key={user.id}>
            <h3>{user.name}</h3>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStatetoProps = (state: any) => {
  return { data: state };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetch: () => dispatch(test()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ThunkComp);
