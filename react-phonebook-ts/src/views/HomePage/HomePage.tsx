import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useAuth } from "../../hooks";
import "./HomePage.css";
import homePageImage from "images/home-page.png";
import { Container } from "componets/Container/Container";

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
