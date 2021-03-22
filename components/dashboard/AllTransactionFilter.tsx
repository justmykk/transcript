import { CSSProperties } from "react";

export const AllTransactionFilter = () => {
  return (
    <div style={container}>
      <span style={spanStyle}>All Transaction</span>
      <img src="/filter.svg" alt="filter" />
    </div>
  );
};

const container: CSSProperties = {
    backgroundColor: '#fff',
    padding: '14px 20px',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 220
}

const spanStyle: CSSProperties = {
    fontSize: 14,
    color: 'var(--text-color)'
}