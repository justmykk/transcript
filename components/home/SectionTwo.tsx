import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { CSSProperties } from 'react';

export const SectionTwo = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.sectionTwoLeft}></div>

        <div className={styles.sectionTwoRight}>
          <p style={titlStyle}>About Us</p>

          <p style={paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            vehicula sollicitudin interdum elementum eu.{' '}
          </p>

          <p style={paragraph}>
            Risus vel ipsum etiam potenti orci placerat non vitae. Risus vitae
            neque, tellus lobortis euismod et, sed. Ipsum faucibus mauris
            maecenas dignissim mauris.
          </p>

          <p style={paragraph}>
            Ipsum faucibus mauris maecenas dignissim mauris.
          </p>

          <Link href="/register">
            <a className="navButton" style={buttonStyle}>
              Get Started <img src="/arrow_forward.svg" alt="arrow" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

const titlStyle: CSSProperties = {
  fontWeight: 'bold',
  fontSize: 24,
  marginBottom: 26,
};

const buttonStyle: CSSProperties = {
  marginLeft: 0,
  width: 200,
  marginTop: 18,
};

const paragraph: CSSProperties = {
  fontWeight: 'normal',
  fontSize: 24,
  lineHeight: '36px',
  letterSpacing: '0.01em',
  color: '#707070',
  marginBottom: 17,
};
