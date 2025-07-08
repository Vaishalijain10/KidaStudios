import logo from "../assets/Images/kidaStudiosLogo.avif";
import image1 from "../assets/Images/Logo1.avif";
import image2 from "../assets/Images/dnus.avif";

export default function NavBar() {
  return (
    <div className="scroll-smooth scroll-mt-24 fixed top-4 left-0 w-full z-50 px-2 sm:px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

       
        <div className="bg-[#e8e6e6fa] px-4 sm:px-6 py-2 sm:py-3 rounded-full flex flex-row sm:flex-row items-center justify-center gap-2 sm:gap-6 shadow-md mx-auto">
         
          <a href="#">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-14 object-contain"
            />
          </a>

         
          <div className="flex flex-row sm:flex-row items-center gap-1 sm:gap-6">
            <a
              href="#apps&games"
              className="text-sm sm:text-base md:text-lg lg:text-xl font-medium"
            >
              Apps & Games
            </a>
            <a
              href="#OurServices"
              className="text-sm sm:text-base md:text-lg lg:text-xl font-medium"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center mt-2 sm:mt-0">
          <img
            src={image1}
            alt="StartUpIndia"
            className="w-20 h-8 sm:w-26 sm:h-10 md:w-32 md:h-12 object-contain"
          />
          <img
            src={image2}
            alt="Img2"
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
