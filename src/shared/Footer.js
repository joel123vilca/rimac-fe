import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full px-6 gap-2 md:px-40 flex flex-col md:flex-row justify-between items-center py-8 bg-[#03050F]">
      <img src={Logo} alt="logo" className="w-[70px] h-9 object-contain" />
      <hr className="block md:hidden w-full border  border-gray-300"></hr>
      <span className="text-white text-[14px]">
        © 2023 RIMAC Seguros y Reaseguros.
      </span>
    </div>
  );
};
export default Footer;
