import Footer from "@/components/common/Footer/Footer";
import Main from "@/components/common/Main/Main";
import TopBar from "@/components/common/TopBar/TopBar";
import Loader from "@/components/UI/Loader/Loader.tsx";

export default function Home({ searchParams }: { searchParams: { page?: string } }) {
  return (
    <>
      <TopBar />
      <Main searchParams={searchParams} />
      <Footer />
      <Loader />
    </>
  );
}
