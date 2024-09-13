import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <Link href="/"><div className={classes.logo}>TODO App</div></Link>
      <nav>
        <ul>
          <li>
            <Link href='/today'>Todays Tasks</Link>
          </li>
          <li>
            <Link href='/today/completedtasks'>Completed Tasks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
