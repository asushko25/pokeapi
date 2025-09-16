"use client";

import { TailSpin } from "react-loader-spinner";
import "./loader.scss";

type Props = {
  fullscreen?: boolean;
};

export default function Loader({ fullscreen = false }: Props) {
  return (
    <div className={`loader-wrapper ${fullscreen ? "fullscreen" : "inline"}`}>
      <TailSpin />
    </div>
  );
}
