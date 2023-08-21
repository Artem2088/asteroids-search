"use client";
import { ButtonProps } from "@/types";
import { FC } from "react";

const Button: FC<ButtonProps> = ({
  title,
  containerStyles,
  stylesTitle,
  handleClick,
  btnType,
  onMousOver,
  onMouseOut,
}) => {
  return (
    <button
      type={btnType || "button"}
      onClick={handleClick}
      className={`${containerStyles}`}
      onMouseOver={onMousOver}
      onMouseOut={onMouseOut}
    >
      <span className={`${stylesTitle}`}>{title}</span>
    </button>
  );
};

export default Button;
