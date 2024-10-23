import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useAuth } from "../../hooks";
import "./HomePage.css";
import homePageImage from "images/home-page.png";
import { Container } from "componets/Container/Container";

/* 
export default function HomePage() {
  const {
    isLoggedIn,
    user: { name },
    token,
  } = useAuth();

  //{ user: { name, location, age } }

  useEffect(() => {
    if (isLoggedIn) {
      document.title = `Hi, ${name}`;
    }

    if (!isLoggedIn) {
      return () => {
        document.title = `Phonebook`;
      };
    }
  }, [isLoggedIn, token, name]);

  return (
    <>
      {isLoggedIn ? (
        <h2 className="homePageTitle">Hello, {name}! This your phonebook</h2>
      ) : null}
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="anime"
        unmountOnExit
      >
        <img src={homePageImage} alt="" width="480" className="homePageImage" />
      </CSSTransition>
    </>
  );
  
}
*/

const HomePages = () => {
  const {
    isLoggedIn,
    user: { name },
    token,
  } = useAuth();

  //{ user: { name, location, age } }

  useEffect(() => {
    if (isLoggedIn) {
      document.title = `Hi, ${name}`;
    }

    if (!isLoggedIn) {
      return () => {
        document.title = `Phonebook`;
      };
    }
  }, [isLoggedIn, token, name]);

  return (
    <Container>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="anime"
        unmountOnExit
      >
        {/* the second solution to add image: 
        <img
          src={require("../../images/home-page.png")}
        /> */}
        <img src={homePageImage} alt="" width="480" className="homePageImage" />
      </CSSTransition>
    </Container>
  );
};

export default HomePages;
