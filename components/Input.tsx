import { CSSProperties } from 'react';

type InputType = {
  placeholder: string;
  inputType?: 'password' | 'email' | 'number' | 'tel' | 'text' | 'date';
  icon?: string;
  value: string;
  onChange?: (arg0: string) => void;
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  readOnly?: boolean;
  onTogglePassword?: () => void;
};

export function AppInput(props: InputType) {
  return (
    <>
      <div style={{ width: '100%', marginBottom: 20, ...props.containerStyle }}>
        <p className="label" style={props.labelStyle}>
          {props.placeholder}
        </p>
        <div className="container" style={props.inputStyle}>
          <input
            value={props.value}
            onChange={(ev) => props.onChange(ev.target.value)}
            className="container__input"
            type={props.inputType || 'text'}
            readOnly={props.readOnly || false}
          />
          {props.icon && (
            <img onClick={props.onTogglePassword} src={`/${props.icon}.svg`} />
          )}
        </div>
      </div>

      <style jsx>{`
        .label {
          color: var(--text-color);
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        .container {
          display: flex;
          flex-direction: row;
          background-color: var(--light-grey);
          height: 50px;
          border-radius: 5px;
          align-items: center;
          padding: 0 20px;
        }
        .container__input {
          border: none;
          outline: none;
          background-color: transparent;
          height: 100%;
          flex: 1;
          font-size: 16px;
        }
      `}</style>
    </>
  );
}
