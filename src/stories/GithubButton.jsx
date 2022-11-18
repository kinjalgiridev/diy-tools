import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './github.css';

export default function GithubButton({ className,height,label,desc,backgroundColor,color,width,borderColor,...props }) {
  const [theme] = "dark";
  return (
    <a className='wrapper' 
    style={{border:`1px solid ${borderColor===null?'#333':borderColor}`,width:`${width}px`,height:`${height}px`,backgroundColor:`${backgroundColor===null?'transparent':backgroundColor}`}}
    {...props}
    >
      <svg
        className='icon'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="32"
        height="32"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
      <div className='body'>
        <h3 className='title'  style={{color:`${color===null?'#333':color}`}}>{label}</h3>
        <p className='description' style={{color:`${color===null?'#333':color}`}}>{desc}</p>
      </div>
    </a>
  );
}

GithubButton.propTypes = {
  backgroundColor: PropTypes.string,
};

GithubButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  label: "This project is open source",
  desc: "Star and fork it on Github",
  width:250,
  color:null,
  borderColor:null,
  height:60,
};
