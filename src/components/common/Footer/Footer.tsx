import Pagination from "../Pagination/Pagination";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className='footer'>
      <Pagination totalPages={8} />
    </footer>
  );
}
