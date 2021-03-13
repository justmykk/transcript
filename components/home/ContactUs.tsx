import { AppButton } from '../AppButton';

export const ContactUs = () => {
  return (
    <section>
      <div className="contact">
        <div className="contact__overlay">
          <p className="contact__label">
            We Provide Fast & Secure Transcript Services.
          </p>
          <AppButton
            label="Contact us"
            width={200}
            buttonColor="#fff"
            fontColor="var(--text-color)"
            onClick={() => alert('here')}
          />
        </div>
      </div>

      <style jsx>
        {`
          .contact {
            height: 360px;
            background: url('/contact_us.png') center no-repeat;
            background-size: cover;
          }

          .contact__overlay {
            height: 100%;
            width: 100%;
            background-color: rgba(39, 39, 39, 0.6);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .contact__label {
            font-weight: 600;
            font-size: 50px;
            line-height: 75px;
            color: #fff;
            margin-bottom: 50px;
            text-align: center;
          }
        `}
      </style>
    </section>
  );
};
