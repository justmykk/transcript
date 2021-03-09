import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export const SectionOne = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.sectionOneLeft}>
          <h1>
            <span>Slide into</span> <br /> The New School Year
          </h1>
          <p>
            Save time on school transfers and paying school fees with this
            online transcript and school fees service
          </p>
          <Link href="/register">
            <a className="navButton">
              Sign Up Now <img src="/arrow_forward.svg" alt="arrow" />
            </a>
          </Link>

          <div>
            <h6>Who we work with</h6>
            <div>
              <img src="/dimarco.svg" alt="dimarco" />
              <img src="/bill_plug.svg" alt="bill" />
              <img src="/dimarco.svg" alt="dimarco" />
              <img src="/bill_plug.svg" alt="bill" />
            </div>
          </div>
        </div>

        <div className={styles.sectionOneImage}></div>
      </div>
    </section>
  );
};
