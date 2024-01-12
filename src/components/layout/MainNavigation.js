import { useEffect, useState } from "react";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

export default function MainNavigation({ setPage }) {

  const [prevY, setPrevY] = useState(window.scrollY)
  const [isVisible, setIsVisible] = useState(true)

  const handleScroll = () => {
    const currentY = window.scrollY
    setIsVisible(prevY > currentY || currentY === 0)
    setPrevY(currentY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevY])

  return (
    <header className={`${classes.header} ${isVisible ? '' : classes.off}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={ALL_MEETUP_PAGE}>All Meetups</Link>
          </li>
          <li>
            <Link to={NEW_MEETUP_PAGE}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={FAVORITES_PAGE}>My Favorites  <span className={classes.badge}>{0}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
