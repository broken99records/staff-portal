import React from 'react';

const CustomButton = ({ 
  text = "AUTHORIZE",
  bgColor = "bg-green-500",
  hoverColor = "hover:bg-green-600",
  textColor = "text-white",
  padding = "px-4 py-2",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`${padding} ${bgColor} ${textColor} rounded ${hoverColor} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;

// Usage example:
// import CustomButton from './CustomButton';
// <CustomButton 
//   text="SUBMIT" 
//   bgColor="bg-blue-500" 
//   hoverColor="hover:bg-blue-600" 
//   onClick={() => handleClick()}
// />