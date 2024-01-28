import fondo from "../assets/images/home.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navegate = useNavigate();
  const [dniType, setDniType] = useState("DNI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const validateInputs = () => {
    if (documentNumber && phoneNumber) return true;
    return false;
  };

  const handleDniTypeChange = (e) => {
    setDniType(e.target.value);
  };

  const handleDocumentNumberChange = (e) => {
    setDocumentNumber(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCotizaClick = () => {
    const isValid = validateInputs();

    if (isValid) {
      navegate("/plans");
    }
  };

  return (
    <div className=" pl-0 md:pl-40 py-10 flex">
      <img src={fondo} alt="home page" className="w-[420px] hidden md:flex" />
      <img src={fondo} alt="home page 1" className="w-[420px] hidden md:flex" />
      <div className=" px-4 md:px-12 flex flex-col">
        <div className="flex gap-4 items-center">
          <div>
            <div className="bg-gradient-to-b from-[#00F4E2] via-[#00FF7F] to-[#00FF7F] p-1 text-bold rounded-lg w-[170px]">
              Seguro Salud Flexible
            </div>
            <h3 className="font-bold text-[28px] mt-6">
              Creado para ti y tu familia
            </h3>
          </div>
          <img
            src={fondo}
            alt="home page 2"
            className="flex md:hidden w-[190px] h-[200px] rounded-lg"
          />
        </div>
        <hr className="flex md:hidden mt-4"></hr>
        <span className="text-[14px] font-semibold mt-4">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </span>
        <div className="mt-6">
          <div className="flex items-center relative">
            <select
              className="h-[56px] w-[140px] border border-[#5E6488] rounded-l outline-none"
              value={dniType}
              onChange={handleDniTypeChange}
            >
              <option value="DNI">DNI</option>
              <option value="CI">CI</option>
            </select>
            <input
              type="text"
              className="h-[56px] px-2 border border-l-0 border-[#5E6488] rounded-r outline-none w-full"
              value={documentNumber}
              onChange={handleDocumentNumberChange}
            />
            <label
              className={`absolute left-[105px] transition-all ${
                documentNumber
                  ? "text-xs top-1 text-gray-500"
                  : "top-4 text-gray-400"
              }`}
            >
              Nro. de documento
            </label>
          </div>
          <div className="relative mt-4">
            <input
              type="text"
              className="w-full h-[56px] px-2 border border-[#5E6488] rounded outline-none"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <label
              className={`absolute left-2 transition-all ${
                phoneNumber
                  ? "text-xs top-1 text-gray-500"
                  : "top-4 text-gray-400"
              }`}
            >
              Celular
            </label>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="myCheckbox"
            className="text-black border-2 border-black focus:ring-black h-6 w-6"
          />
          <label htmlFor="myCheckbox" className="ml-2 text-black">
            Acepto la Política de Privacidad
          </label>
        </div>
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="myCheckbox"
            className="text-black border-2 border-black focus:ring-black h-6 w-6"
          />
          <label htmlFor="myCheckbox" className="ml-2 text-black">
            Acepto la Política Comunicaciones Comerciales
          </label>
        </div>
        <a href="/" className="font-semibold text-[12px] underline mt-6">
          Aplican Términos y Condiciones.
        </a>
        <button
          onClick={handleCotizaClick}
          className="py-5 text-center text-[18px] font-bold bg-[#03050F] text-white rounded-[40px] mt-6"
        >
          Cotiza aquí
        </button>
      </div>
    </div>
  );
};

export default HomePage;
