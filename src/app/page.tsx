import TopBar from "@/components/common/TopBar/TopBar";
import Footer from "@/components/common/Footer/Footer";
import Loader from "@/components/UI/Loader/Loader.tsx";
import { Suspense } from "react";
import Main from "@/components/common/Main/Main";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;

  return (
    <>
      <TopBar />
      <Suspense fallback={<Loader />}>
        <Main searchParams={params} />
      </Suspense>
      <Footer />
    </>
  );
}
