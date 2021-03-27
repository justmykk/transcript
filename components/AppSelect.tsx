import React, { CSSProperties } from 'react';

interface Props {
  label: string;
  options: Array<{ label: string; value: string }>;
  containerStyle?: CSSProperties;
}

export const AppSelect: React.FC<Props> = (props) => {
  return (
    <div>
      <p className="appSelectLabel">{props.label}</p>
      <div className="appSelect" style={props.containerStyle}>
        <select>
          {props.options.map((item, index) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
