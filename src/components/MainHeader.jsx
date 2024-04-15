import { Link } from "react-router-dom";
import imgLogo from "../assets/logo.png";
import { useStore } from "../hooks/useStore";
const MainHeader = () => {
  const { titleWeb } = useStore();

  return (
    <section className="sticky top-0 bg-stone-900 z-10">
      <header className="max-w-7xl m-auto ">
        <Link className="flex items-center gap-2 p-4" to="/">
          <img width={32} height={32} src={imgLogo} alt="logo" />
          <div className="flex flex-col">
            <strong>{titleWeb}</strong>
            <small> Bones, boniques i barates</small>
          </div>
        </Link>
      </header>
    </section>
  );
};

export default MainHeader;
