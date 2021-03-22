interface Props {
    title: string;
    value: string;
}

export const DashboardCard: React.FC<Props> = (props) => {
  return (
    <>
      <div className="card">
          <p>{props.title}</p>
          <p>{props.value}</p>
      </div>

      <style jsx>{`
        .card {
          background-color: #fff;
          border-radius: 10px;
          height: 150px;
          flex: 1;
          background-image: url('/card_bg.svg');
          background-position: right center;
          background-size: contain;
          background-repeat: no-repeat;
          padding: 20px;
        }

        .card > p:first-child {
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 13px;
        }

        .card > p:last-child {
            font-weight: 600;
            font-size: 30px;
            color: var(--primary-color);
        }
      `}</style>
    </>
  );
};
