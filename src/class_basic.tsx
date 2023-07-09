import React from "react";

class Car extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("in construcvtor");
    this.state = { color: "red", value: true };
  }

  // static getDerivedStateFromProps() {
  //   //return { color: "orange" };
  //   console.log("IM there before the component rendered");
  //   return { color: "orange" };
  // }
  getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
    console.log(prevState.color);
    return 0;
  }

  componentDidMount() {
    console.log("IM in component did mount");
  }

  componentDidUpdate() {
    console.log("IM in component did update");
  }
  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("IM inside this ");

    return (
      <>
        <button
          onClick={() => {
            console.log("IM trying to update");
            this.setState({
              color: "blue",
            });
          }}
        >
          Show the text
        </button>

        <h1>
          HI I'm from car Component and this color is {this.state.color} and the
          model is {this.props.model}
        </h1>
      </>
    );
  }
}

export default Car;
