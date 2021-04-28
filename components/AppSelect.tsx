import React, { CSSProperties } from 'react';

interface Props {
  label: string;
  options: Array<{ label: string; value: string }>;
  containerStyle?: CSSProperties;
  value: string;
  onChange: (args0: string) => void;
}

export const AppSelect: React.FC<Props> = (props) => {
  return (
    <div>
      <p className="appSelectLabel">{props.label}</p>
      <div className="appSelect" style={props.containerStyle}>
        <select value={props.value} onChange={val => props.onChange(val.target.value)}>
          <option value="" disabled></option>
          {props.options.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
