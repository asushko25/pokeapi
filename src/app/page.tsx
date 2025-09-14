// import Image from "next/image";

import TopBar from "@/components/common/TopBar/TopBar";
import Loader from "@/components/UI/Loader/Loader.tsx";

export default function Home() {
  return (
    <>
      <TopBar />
      <Loader />
    </>
  );
}
