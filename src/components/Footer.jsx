import logo from "../assets/Images/kidaStudiosLogo.avif";
import image1 from "../assets/Images/Logo1.avif";
import image2 from "../assets/Images/dnus.avif";

export default function Footer() {
  return (
    <div className="flex justify-between items-start px-76 py-4 mt-0">
      <div>
        <a href="#">
          <img src={logo} alt="Logo" className="w-26 h-15" />
        </a>
      </div>
    
      <div className="flex flex-row items-end gap-6">
        <div className="flex-col ">
          <img src={image1} alt="StartUpIndia" className="w-22 h-10" />
          <p className="text-md text-gray-800">DIPP129619</p>
        </div>
        <img src={image2} alt="Img2" className="w-16 h-14" />
      </div>
    </div>
  );
}
