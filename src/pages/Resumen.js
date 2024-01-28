const Resumen = () => {
  return (
    <div className="px-6 md:px-80 mt-10">
      <h3 className="font-semibold text-[32px] md:text-[40px]">
        Resumen del seguro{" "}
      </h3>
      <div className="w-full mt-10 shadow-custom p-6 rounded-lg flex flex-col">
        <div className="text-[10px]">Precios calculados para:</div>
        <span className="text-[20px] font-bold">Rocio Miranda Díaz</span>
        <hr className="mt-4"></hr>
        <span className="text-[16px] font-bold mt-4">Responsable de pago</span>
        <span className="text-[14px]">DNI: 444888888</span>
        <span className="text-[14px]">Celular: 5130216147</span>
        <span className="text-[16px] font-bold mt-4">Plan elegido</span>
        <span className="text-[14px]">Plan en Casa y Clínica</span>
        <span className="text-[14px]">Costo del Plan: $99 al mes</span>
      </div>
    </div>
  );
};

export default Resumen;
