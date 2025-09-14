import SearchBar from "@/components/UI/SearchBar/SearchBar";
import "./topBar.scss";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="container">
      <header className="header">
        <div className="topbar">
          <div className="topbar__info">
            <Image
              src="/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="topbar__logo"
            />
            <h1 className="topbar__title">Pokédex</h1>
          </div>

          <div className="topbar__search">
            <SearchBar />

            <Image
              src="/settings.svg"
              alt="settings icon"
              width={24}
              height={24}
              className="topbar__logo"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
