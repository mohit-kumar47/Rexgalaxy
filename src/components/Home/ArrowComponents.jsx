import React from 'react';

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "Blue", borderRadius: "50%" ,width: "40px", height: "40px", lineHeight: "50px", textAlign: "center", color: "white", fontSize: "10px", }}
      onClick={onClick}
    />
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue", borderRadius: "50%",width: "40px", height: "40px", lineHeight: "50px", textAlign: "center", color: "white", fontSize: "10px" }}
      onClick={onClick}
    />
  );
};
