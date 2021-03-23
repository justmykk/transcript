import { FormEvent } from 'react';
import { CommonAppBar } from '../components/CommonAppBar';
import { CommonLayout } from '../components/CommonLayout';

const SchoolFees = () => {
  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
  };

  return (
    <CommonLayout>
      <div className="schoolfees">
        <img src="/school_fees.svg" alt="under construction" />

        <div className="schoolfees__container">
          <p className="schoolfees__title">Coming Soon</p>
          <p className="schoolfees__subtitle">
            Working on some awesome{' '}
            <span className="schoolfees__subtitle--highlight">
              School Fees Payment
            </span>{' '}
            features.
          </p>

          <form className="schoolfees__form" onSubmit={onSubmit}>
            <input placeholder="Your Email" required type="email" />

            <button type="submit">
              <img src="/button_arrow.svg" alt="button arrow" />
            </button>
          </form>

          <p className="schoolfees__notify">
            You will get notify when this feature is available
          </p>
        </div>
      </div>
    </CommonLayout>
  );
};

export default SchoolFees;
