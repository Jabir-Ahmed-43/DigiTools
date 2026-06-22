import {
    TiSocialFacebook,
    TiSocialInstagram,
    TiSocialLinkedin,
} from "react-icons/ti";
const Footer = () => {
  return (
    <footer className="px-50 py-30 font-display bg-[#101727]">
      <div className="flex flex-row gap-6 justify-evenly text-white">
        <div className="flex flex-col w-[350px] h-[72px]">
          <h1 className="text-5xl pb-4 font-extrabold">DigiTools</h1>
          <p>
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Products</h1>
          <a className="text-[16px]" href="#">
            Features
          </a>
          <a className="text-[16px]" href="#">
            Pricing
          </a>
          <a className="text-[16px]" href="#">
            Templates
          </a>
          <a className="text-[16px]" href="#">
            Integrations
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Company</h1>
          <a className="text-[16px]" href="#">
            About
          </a>
          <a className="text-[16px]" href="#">
            Blog
          </a>
          <a className="text-[16px]" href="#">
            Carrers
          </a>
          <a className="text-[16px]" href="#">
            Press
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Resources</h1>
          <a className="text-[16px]" href="#">
            Documentation
          </a>
          <a className="text-[16px]" href="#">
            Help Center
          </a>
          <a className="text-[16px]" href="#">
            Community
          </a>
          <a className="text-[16px]" href="#">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Social Links</h1>
          <div className="flex items-center gap-3">
            <div className="bg-white text-black  w-10 h-10 flex justify-center items-center rounded-full">
              <TiSocialFacebook className="w-8 h-8" />
            </div>
            <div className="bg-white text-black w-10 h-10 flex justify-center items-center rounded-full">
              <TiSocialInstagram className="w-8 h-8"></TiSocialInstagram>
            </div>
            <div className="bg-white text-black w-10 h-10 flex justify-center items-center rounded-full">
              <TiSocialLinkedin className="w-8 h-8"></TiSocialLinkedin>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
