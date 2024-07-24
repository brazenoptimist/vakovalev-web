import React from "react";
import { ReactComponent as LogoSVG } from "../assets/logo.svg";

interface LogoProps {
  size: number;
}

export const Logo: React.FC<LogoProps> = ({ size }: LogoProps) => {
  const hw = `${size}px`;

  return (
      <div
          className="relative flex items-center justify-center"
          style={{ width: hw, height: hw }}
      >
      </div>
  );
};
