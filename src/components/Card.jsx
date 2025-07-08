import { Link } from "react-router-dom";

const Card = ({ title, description, image, logo, gradient }) => {
  return (
    <div
      className="w-full max-w-[500px] h-[400px] flex flex-row sm:flex-row overflow-hidden rounded-xl shadow-lg"
      style={{ background: gradient }}
    >
      <div className="w-full sm:w-1/2 p-4 text-white flex flex-col justify-between">
        <div>
          <img src={logo} alt="logo" className="w-16 h-16 mb-4 rounded-2xl" />
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm mt-2 leading-snug font-semibold">{description}</p>
        </div>
        <Link to="#" className="mt-4 inline-block w-[100px]">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on App Store"
            className="w-full"
          />
        </Link>
      </div>

      <div className="w-full sm:w-1/2">
        <img src={image} alt="game" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Card;
