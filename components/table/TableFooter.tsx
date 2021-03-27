import React from 'react';

export const TableFooter = () => {
  return (
    <div className="row tableFooter">
      <div className="row footerEntries">
        <div className="row footerActionContainer">
          <div className="footerAction">
            <span>Show</span>
          </div>
          <div className="footerAction">
            <select>
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <img src="/down_arrow.svg" alt="down arrow" />
          </div>
        </div>
        <span style={{marginLeft: 15}}>Entries</span>
      </div>

      <div className="row">
        <div className="row footerActionContainer rightMargin">
          <div className="footerAction">
            <img
              style={{ marginRight: 10 }}
              src="/back_arrow_md.svg"
              alt="back arrow"
            />
            <span>Prev</span>
          </div>
          <div className="footerAction">
            <span style={{ marginRight: 10 }}>Next</span>
            <img src="/forward_arrow.svg" alt="forward arrow" />
          </div>
        </div>

        <div className="row footerActionContainer">
          <div className="footerAction">
            <span>Page</span>
          </div>
          <div className="footerAction">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <img src="/down_arrow.svg" alt="down arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
