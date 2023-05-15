import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addUserDetailsAPI } from "../actions";
import { useEffect, useState } from "react";

const Home = (props) => {
  // to make sure user is actully signed in and if user is not there then go back to login page.
  if (!props.user) {
    console.error("No user found while loading /Home.js");
  }

  const [shareImage, setShareImage] = useState("");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  // TO add the user details for the first time when Home component mounts
  useEffect(() => {
    if (props.loading && props.user) {
      console.log("Home.js is loaded");
      console.log("user is: ", props.user);

      const payload = {
        image: shareImage,
        email: props.user.email,
        name: "user",
        about: "",
        position: null,
        bodytype: null,
        lookingfor: null,
        status: null,
        userTrueLocation: location, // add the location here
        userFakeLocation: null,
        isActive: true,
      };

      props.addUserDetails(payload);
    }
  }, [props.loading, props.user, location]); // Empty dependency array ensures this effect is only called once on mount

  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftspace leftside main rightside rightspace";
  grid-template-columns: minmax(0, 1fr) minmax(0, 5fr) minmax(0, 12fr) minmax(
      0,
      6fr
    ) minmax(0, 1fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addUserDetails: (payload) => dispatch(addUserDetailsAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
