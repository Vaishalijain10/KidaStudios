import logo from "../assets/Images/kidaStudiosLogo.avif";
import image1 from "../assets/Images/Logo1.avif";
import image2 from "../assets/Images/dnus.avif";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
        
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Logo" className="w-36 h-auto object-contain" />
        </a>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src={image1} alt="StartUpIndia" className="w-24 h-auto object-contain" />
            <p className="text-sm text-gray-800 mt-1">DIPP129619</p>
          </div>
          <img src={image2} alt="Img2" className="w-16 h-auto object-contain" />
        </div>
      </div>
    </footer>
  );
}
