// src/Header.tsx
import React from "react";

type Props = {
  title: string;
  color: string;
  align: "left" | "right" | "center" | "justify";
};

const Header: React.FC<Props> = ({ title, color, align }) => {
  return <h1 style={{ color: color || "blue", textAlign: align }}>{title}</h1>;
};

export default Header;
