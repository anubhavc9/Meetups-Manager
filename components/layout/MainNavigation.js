import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

function MainNavigation() {
  const [collapsedNavbar, setCollapsedNavbar] = useState(false);

  function collapseHandler() {
    setCollapsedNavbar(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div>
      
      <header className={classes.header}>
        <div className={classes.logo}>Meetups Manager</div>
        <nav>
          <div className={classes.menuIconWrapper}>
            <ul>
              <li>
                <Link href='/'>All Meetups</Link>
              </li>
              <li>
                <Link href='/new-meetup'>Add New Meetup</Link>
              </li>
            </ul>
            <span onClick={collapseHandler}>
              <FaBars className={classes.barsIcon} />
            </span>
          </div>
        </nav>
      </header>

      {collapsedNavbar && <div>
        <header className={`${classes.header} ${classes.collapsedHeader}`}>
          <nav>
            <ul className={classes.collapsedUl}>
              <li>
                <Link href='/'>All Meetups</Link>
              </li>
              <li>
                <Link href='/new-meetup'>Add New Meetup</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>}

    </div>
  );
}

export default MainNavigation;
