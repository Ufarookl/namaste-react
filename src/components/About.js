import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div className="about-card">
        <h1>Hello. Welcome to Swiggy clone by Umar Farook</h1>
        <div>
          LoggedInUser :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Umar Farook"}
          email={"connectwithus@swiggy.com"}
          contact={"+91-5645623568"}
        />
        <UserClass
          name={"Human Resource"}
          email={"hr@swiggy.com"}
          contact={"+91-7755663322"}
        />
        <UserClass
          name={"Facilities"}
          email={"facilities@swiggy.com"}
          contact={"+91-5632777777"}
        />
        <UserClass
          name={"IT Dept"}
          email={"it@swiggy.com"}
          contact={"+91-658333311144"}
        />
      </div>
    );
  }
}

export default About;
