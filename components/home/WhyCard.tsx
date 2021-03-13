import React from 'react';

interface Props {
  title: string;
  image: string;
  subtitle: string;
  content: string;
}

export const WhyCard: React.FC<Props> = (props) => {
  return (
    <>
      <div className="card">
        <div className="card__title">
          <div className="card__title--opacity">
            <p>{props.title}</p>
          </div>
        </div>

        <p className="card__content">
          <span style={{ fontWeight: 600 }}>{props.subtitle}</span>
          <br />
          <span>{props.content}</span>
        </p>
      </div>

      <style jsx>
        {`
          .card {
            flex: 1;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-sizing: border-box;
            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.07);
            border-radius: 5px;
            min-height: 300px;
            padding: 30px 20px;
          }

          .card:nth-child(2) {
            margin: 0 37px;
          }

          .card__title {
            height: 115px;
            width: 100%;
            background: url(${props.image}) center no-repeat;
            background-size: cover;
          }

          .card__title--opacity {
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .card__title--opacity > p {
            font-weight: bold;
            font-size: 22px;
            line-height: 33px;
            color: #fff;
          }

          .card__content {
            font-size: 18px;
            line-height: 27px;
            letter-spacing: -0.02em;
            color: var(--light-text);
            margin-top: 20px;
          }
        `}
      </style>
    </>
  );
};
