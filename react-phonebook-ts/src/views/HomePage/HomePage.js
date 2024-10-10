import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAuth } from '../../hooks';
import './HomePage.css';
import homePageImage from './home-page.png';

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
