import React, { useState } from "react";
import homeIcon from "../assets/images/IcHomeLight.png";
import { useMediaQuery } from "react-responsive";

const Pagination = ({ plans, setPlan }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const itemsPerPage = isMobile ? 1 : 3;
  const totalItems = plans.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(totalItems / itemsPerPage))
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const cards = plans.slice(startIndex, endIndex).map((plan, index) => (
    <div
      key={startIndex + index}
      className="w-full rounded-lg overflow-hidden shadow-custom"
    >
      <div className="px-8 py-4">
        <div className="flex justify-between">
          <div className="text-[24px] font-bold">{plan.name}</div>
          <div>
            <img src={homeIcon} alt="home icon" />
          </div>
        </div>
        <div className="text-[#7981B2] text-[12px]">Costo del plan</div>
        <div className="text-[20px] font-bold">${plan.price} al mes</div>
        <hr className="mt-4"></hr>
        <div className="mt-6">
          <ul className="list-disc space-y-6">
            {plan.description.map((item, idx) => (
              <li key={idx}>
                <p className="text-gray-600">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setPlan(plan)}
          className="bg-[#FF1C44] text-white text-center rounded-3xl w-full py-[14px] text-[18px] font-bold mt-10"
        >
          Seleccionar Plan
        </button>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col md:flex-row gap-4 justify-center w-full px-4 md:px-40">
        {cards}
      </div>
      <div className="mt-4 flex md:hidden">
        <button
          className={`${
            currentPage === 1
              ? "border border-[#A9AFD9] cursor-not-allowed"
              : "border border-[#432EFF] "
          } text-[#432EFF] font-bold rounded-full h-8 w-8 mr-2 flex justify-center items-center`}
          onClick={handlePrev}
          disabled={currentPage === 1}
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
        </button>
        <span className="px-4 mt-1">{`${currentPage} / ${Math.ceil(
          totalItems / itemsPerPage
        )}`}</span>
        <button
          className={`${
            currentPage === Math.ceil(totalItems / itemsPerPage)
              ? "border border-[#A9AFD9] cursor-not-allowed"
              : "border border-[#432EFF]"
          } text-[#432EFF] font-bold h-8 w-8 rounded-full flex justify-center items-center`}
          onClick={handleNext}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.70493 13.2049L5.29492 11.7949L9.08492 7.99992L5.29492 4.20492L6.70493 2.79492L11.9149 7.99992L6.70493 13.2049Z"
              fill="#432EFF"
            />
          </svg>
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default Pagination;
