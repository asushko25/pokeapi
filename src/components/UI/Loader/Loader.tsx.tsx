"use client";

import { TailSpin } from "react-loader-spinner";
import "./loader.scss";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <TailSpin />
    </div>
  );
}
