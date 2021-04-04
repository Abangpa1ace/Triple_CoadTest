import React from "react";

export interface ParagraphT {
  children: React.ReactNode;
  theme?: object | string;
  margin?: object | string;
  padding?: object | string;
  color?: object | string;
  fontSize?: object | string;
  colorHov?: object | string;
}