import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import styles from '../styles/TabBar.module.css';

interface Props {
  active?: boolean;
}

export function TabBar(props: Props) {
  const router = useRouter();

  const path = useRouter().pathname;

  return (
    <nav className={styles.nav}>
      <div className={styles.navRow}>
        <Link href="/dashboard">
          <a
            className={styles.navItem}
            style={path === '/dashboard' ? activeItem : {}}
          >
            Dashboard
          </a>
        </Link>
        <Link href="/school-fees">
          <a
            className={styles.navItem}
            style={path === '/school-fees' ? activeItem : {}}
          >
            School Fees
          </a>
        </Link>
        <Link href="/transcript">
          <a
            className={styles.navItem}
            style={path === '/transcript' ? activeItem : {}}
          >
            Transcript
          </a>
        </Link>
        <Link href="/settings">
          <a
            className={styles.navItem}
            style={path === '/settings' ? activeItem : {}}
          >
            Settings
          </a>
        </Link>
      </div>
    </nav>
  );
}

const activeItem: CSSProperties = {
  borderBottomColor: 'var(--primary-color)',
  borderBottomWidth: 3,
  borderBottomStyle: 'solid',
};
