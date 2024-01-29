import { useNavigate } from "react-router-dom";

const BackRoute = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-72 hidden md:flex items-center gap-2 py-10 cursor-pointer">
      <button
        onClick={handleGoBack}
        className="border border-[#432EFF] text-[#432EFF] font-bold h-8 w-8 rounded-full flex justify-center items-center"
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
      <span className="text-[#4F4FFF] text-[18px] font-semibold">Volver</span>
    </div>
  );
};

export default BackRoute;
