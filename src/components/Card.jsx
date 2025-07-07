import { Link } from "react-router-dom";

const Card = ({ title, description, image, logo, gradient }) => {
  return (
    <div
      className="flex w-[500px] h-[400px] overflow-hidden shadow-lg"
      style={{
        background: gradient,
      }}
    >
      <div className="w-1/2 p-3 text-white flex flex-col justify-between ">
        <div className="item-center">
          <img src={logo} alt="logo" className="w-20 h-20 mb-5 rounded-2xl" />
          <h1 className="text-[23px] font-bold">{title}</h1>
          <p className="text-[15px] mt-2 leading-tight font-semibold">
            {description}
          </p>
        </div>
        <Link to="#" className="mt-3 inline-block w-[90px]">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on App Store"
            className="w-full"
          />
        </Link>
      </div>

      <div className="w-1/2">
        <img src={image} alt="game" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Card;
