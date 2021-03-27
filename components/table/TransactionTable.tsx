import React from 'react';
import { TableFooter } from './TableFooter';

interface Props {
  list: Array<any>;
}

export const TransactionTable: React.FC<Props> = (props) => {
  const getColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'failed':
        return 'var(--danger-color)';
      case 'successful':
        return 'var(--success-color)';
      default:
        return 'var(--pending-color)';
    }
  };

  return (
    <div className="tableContainer">
      <table cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <td>Transaction Id</td>
            <td>Session</td>
            <td>Semester</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {props.list.map((item, index) => (
            <tr key={index.toString()}>
              <td>TRS/2020/024</td>
              <td>18/19</td>
              <td>2</td>
              <td>29-12-2020</td>
              <td>NGN 2000.00</td>
              <td style={{ color: getColor(item.status) }}>{item.status}</td>
              <td>
                <img src="/table_option.svg" alt="options" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TableFooter />
    </div>
  );
};
