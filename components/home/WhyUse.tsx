import styles from '../../styles/Home.module.css';
import { WhyCard } from './WhyCard';

export const WhyUse = () => {
  return (
    <section>
      <div className={styles.whySection}>
        <p className="why__title">Why you should use Roam</p>

        <div className="row">
          <WhyCard
            subtitle="No more bank queues."
            content="Pay your school fees securely with our service and keep close track."
            image="/school_fees.png"
            title="Pay School Fees"
          />
          <WhyCard
            subtitle="No more bank queues."
            content="Pay your school fees securely with our service and keep close track."
            image="/get_transcript.png"
            title="Get Transcripts Easily"
          />
          <WhyCard
            subtitle="No more bank queues."
            content="Pay your school fees securely with our service and keep close track."
            image="/keep_track.png"
            title="Keep Track"
          />
        </div>
      </div>

      <style jsx>
        {`
          .row {
            display: flex;
          }

          .why__title {
            font-weight: 700;
            font-size: 24px;
            line-height: 124.5%;
            color: var(--text-color);
            margin-bottom: 25px;
          }
        `}
      </style>
    </section>
  );
};
