import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'

const DisplayUser = ({ getUsers}) => {
  useEffect(() => {
    const url = "http://localhost:8080/app/user/getall"
    const config = {
      headers: {
        "auth-token": getUsers,
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  console.log(getUsers)

  return (
    <>
      {/* <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{address}</h2> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  getUsers: state.signIn.users,
});

export default connect(mapStateToProps, null)(DisplayUser);
