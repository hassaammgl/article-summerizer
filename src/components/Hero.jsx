import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="My Logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          onClick={() =>
            window.open(
              "https://github.com/hassaammgl/article-summerizer",
              "_blank"
            )
          }
        >
          Github
        </button>
      </nav>
    </header>
  );
};

export default Hero;
