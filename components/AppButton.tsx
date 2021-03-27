import React, { CSSProperties, version } from 'react';
import Link from 'next/link';

interface Props {
  width?: number;
  fontWeight?: number;
  fontSize?: number;
  isLink?: boolean;
  buttonColor?: string;
  fontColor?: string;
  onClick?: () => void;
  href?: string;
  label: string;
  padding?: string;
}

export const AppButton: React.FC<Props> = (props) => {
  const style: CSSProperties = {
    width: props.width ?? '100%',
    fontWeight: props.fontWeight ?? 500,
    fontSize: props.fontSize ?? 16,
    backgroundColor: props.buttonColor ?? 'var(--primary-color)',
    color: props.fontColor ?? '#fff',
    padding: props.padding || '15px 20px'
  };

  return (
    <>
      {!props.isLink ? (
        <button onClick={props.onClick} className="app-button" style={style}>
          {props.label}
        </button>
      ) : (
        <Link href={props.href ?? ''}>
          <a style={style} className="app-button">
            {props.label}
          </a>
        </Link>
      )}

      <style jsx>
        {`
          .app-button {
            border-radius: 5px;
            border: none;
            font-family: var(--app-font);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
          }
        `}
      </style>
    </>
  );
};
