import logo from "../assets/Images/kidaStudiosLogo.avif";
import image1 from "../assets/Images/Logo1.avif";
import image2 from "../assets/Images/dnus.avif";

export default function NavBar() {
  return (
    <div className="scroll-smooth scroll-mt-24 fixed top-4 left-0 w-full z-50 flex justify-center items-center px-4 py-2">
      <div className="bg-[#e8e6e6fa] px-6 py-3 rounded-[50px] flex items-center gap-6 shadow-md">
        <a href="#">
          <img src={logo} alt="Logo" className="w-16 h-10" />
        </a>
        <a href="#apps&games" className="text-lg font-medium">
          Apps & Games
        </a>
        <a href="#OurServices" className="text-lg font-medium">
          Our Services
        </a>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-4 items-center">
        <img
          src={image1}
          alt="StartUpIndia"
          className="w-26 h-10 object-contain"
        />
        <img src={image2} alt="Img2" className="w-16 h-14 object-contain" />
      </div>
    </div>
  );
}
