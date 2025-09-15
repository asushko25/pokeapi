import TopBar from "@/components/common/TopBar/TopBar";
import Footer from "@/components/common/Footer/Footer";
import Loader from "@/components/UI/Loader/Loader.tsx";
import { Suspense } from "react";
import Main from "@/components/common/Main/Main";

export default function Home({ searchParams }: { searchParams: { page?: string; search?: string } }) {
  return (
    <>
      <TopBar />
      <Suspense fallback={<Loader />}>
        <Main searchParams={searchParams} />
      </Suspense>
      <Footer />
    </>
  );
}
