import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Constructor");

    //this is how we write useState in class based components
    this.state = {
      department: "Help-desk",
      organization: "Swiggy",
      votecount: 0,
    };
  }

  // to make api call me the below function async
  componentDidMount() {
    console.log(this.props.name + " component did mount");
  }

  render() {
    console.log(this.props.name + " render");
    const { name, email, contact } = this.props;
    const { department, organization, votecount } = this.state;
    return (
      <div className="user-container">
        <div className="user-card">
          <h1>No.of.Votes : {votecount}</h1>
          <button
            className="vote-btn"
            onClick={() => {
              this.setState({
                votecount: votecount + 1,
              });
            }}
          >
            Vote Me...
          </button>
          <h2>Name : {name} </h2>
          <h3>Email : {email}</h3>
          <h3>Contact : {contact}</h3>
          <h3>Department : {department}</h3>
          <h3>Organization : {organization}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
