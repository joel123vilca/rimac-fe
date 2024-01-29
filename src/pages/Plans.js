import React, { useState, useEffect } from "react";
import protectIcon from "../assets/images/IcProtectionLight.png";
import AddUserIcon from "../assets/images/IcAddUserLight.png";
import Pagination from "../components/Pagination";
import * as userActions from "../redux/actions/userActions";
import * as plansActions from "../redux/actions/plansActions";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/selectors/userSelector";
import { plansSelector } from "../redux/selectors/plansSelector";
import { useNavigate } from "react-router-dom";
import BackRoute from "../components/BackRoute";

const Plans = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const user = useSelector(userSelector);
  const plans = useSelector(plansSelector);

  useEffect(() => {
    dispatch(userActions.getUser());
    dispatch(plansActions.getPlans());
  }, [dispatch]);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const calculateAge = () => {
    const birthDateObj = new Date(user?.birthDay);
    const currentDate = new Date();
    const timeDifference = currentDate - birthDateObj;
    const age = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));

    return age;
  };

  const getPlans = () => {
    return plans.filter((item) => item.age <= calculateAge());
  };

  const handleGoBack = () => {
    navegate(-1);
  };

  const setPlan = (plan) => {
    dispatch(plansActions.savePlanToLocalStorage(plan));
    navegate("/resumen");
  };

  return (
    <div>
      <div className="bg-[#EDEFFC] py-4 w-full flex justify-center gap-4">
        <div className=" items-center gap-2 hidden md:flex ">
          <div className="w-8 h-8 rounded-full bg-[#4F4FFF] text-white flex items-center justify-center">
            1
          </div>
          <span className="font-semibold">Planes y coberturas</span>
        </div>
        <div className="text-[#4F4FFF] font-bold hidden md:flex  items-center">
          - - -
        </div>
        <div className=" items-center gap-2 hidden md:flex">
          {" "}
          <div className="w-8 h-8 rounded-full border border-[#7981B2] text-[#7981B2] flex items-center justify-center">
            2
          </div>
          <span className="text-[#7981B2]">Resumen</span>
        </div>
        <div className="text-[10px] flex items-center md:hidden gap-4">
          {" "}
          <button
            onClick={handleGoBack}
            className={`border border-[#A9AFD9] text-[#432EFF] font-bold rounded-full h-8 w-8 mr-2 flex justify-center items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.29496 13.2049L4.08496 7.99992L9.29496 2.79492L10.705 4.20492L6.91496 7.99992L10.705 11.7949L9.29496 13.2049Z"
                fill="#7981B2"
              />
            </svg>
          </button>{" "}
          PASO 1 DE 2
          <div className="relative pt-1 block md:hidden">
            <div className="flex mb-2 items-center justify-between">
              <div className="flex-1 relative">
                <div className="flex items-center">
                  <div className="w-40 bg-[#D7DBF5] h-2 rounded-full">
                    <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackRoute />
      <div className="flex flex-col justify-center items-center mt-16 px-6 md:px-0">
        <div className="text-[28px] md:text-[40px] font-semibold">
          {user?.name} ¿Para quién deseas cotizar?
        </div>
        <span className="text-[16px]">
          Selecciona la opción que se ajuste más a tus necesidades.
        </span>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div
            className={`w-full md:w-[256px] shadow rounded-lg py-4 px-6 cursor-pointer ${
              selectedCard === "1" ? "border border-2 border-[#03050F]" : ""
            }`}
            onClick={() => handleCardClick("1")}
          >
            <div className="flex justify-end">
              <input
                type="radio"
                className="form-radio-custom"
                name="radio"
                checked={selectedCard === "1"}
                onChange={() => setSelectedCard("1")}
              />
            </div>
            <div className="flex flex-col">
              <img
                src={protectIcon}
                alt="protect"
                className="h-12 w-12 object-contain"
              />
              <span className="font-bold text-[20px]">Para mí</span>
              <span className="text-[12px]">
                Cotiza tu seguro de salud y agrega familiares si así lo deseas.
              </span>
            </div>
          </div>
          <div
            className={`w-full md:w-[256px] shadow rounded-lg py-4 px-6 cursor-pointer ${
              selectedCard === "2" ? "border border-2 border-[#03050F]" : ""
            }`}
            onClick={() => handleCardClick("2")}
          >
            <div className="flex justify-end">
              <input
                type="radio"
                className="form-radio-custom"
                name="radio"
                checked={selectedCard === "2"}
                onChange={() => setSelectedCard("2")}
              />
            </div>
            <div className="flex flex-col">
              <img
                src={AddUserIcon}
                alt="add user"
                className="h-12 w-12 object-contain"
              />

              <span className="font-bold text-[20px]">Para alguien más</span>
              <span className="text-[12px]">
                Realiza una cotización para uno de tus familiares o cualquier
                persona.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {selectedCard && <Pagination plans={getPlans()} setPlan={setPlan} />}
      </div>
    </div>
  );
};

export default Plans;
