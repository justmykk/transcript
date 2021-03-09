import Link from 'next/link';
import styles from '../../styles/Nav.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>

        <ul className={styles.linkContainer}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <a>Service</a>
          </li>

          <li>
            <a>About</a>
          </li>

          <li>
            <a>Testimonial</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>

        <div className={styles.buttonContainer}>
          <Link href="/login">
            <a>Log In</a>
          </Link>
          <Link href="/register">
            <a className="navButton">
              Sign Up Now <img src="/arrow_forward.svg" alt="arrow" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
