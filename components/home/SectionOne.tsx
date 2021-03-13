import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { CSSProperties } from 'react';

export const SectionOne = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.sectionOneLeft}>
          <h1>
            <span style={{ color: '#FF0008' }}>Slide into The New</span> <br />
            <span style={{ color: 'var(--primary-color)' }}>School Year</span>
          </h1>

          <p>
            Save time on school transfers and paying school fees with this
            online transcript and school fees service
          </p>

          <Link href="/register">
            <a className="navButton" style={buttonStyle}>
              Sign Up Now <img src="/arrow_forward.svg" alt="arrow" />
            </a>
          </Link>

          <div>
            <div className={styles.row}>
              <h6>Who we work with</h6>
              <div className={styles.sectionLine} />
            </div>

            <div className={styles.iconRow}>
              <div>
                <img src="/dimarco.svg" alt="dimarco" />
                <p>Dimarco</p>
              </div>

              <div>
                <img src="/bill_plug.svg" alt="bill" />
                <p>Bill Plug</p>
              </div>

              <div>
                <img src="/dimarco.svg" alt="dimarco" />
                <p>Dimarco</p>
              </div>

              <div>
                <img src="/bill_plug.svg" alt="bill" />
                <p>Bill Plug</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionOneImage}></div>
      </div>
    </section>
  );
};

const buttonStyle: CSSProperties = {
  marginLeft: 0,
  width: 200,
  marginTop: 25,
  marginBottom: 90,
};
