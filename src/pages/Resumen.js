import React, { useEffect } from "react";
import * as userActions from "../redux/actions/userActions";
import * as plansActions from "../redux/actions/plansActions";
import { useDispatch, useSelector } from "react-redux";
import {
  userSelector,
  userDataSelector,
} from "../redux/selectors/userSelector";
import { planSelector } from "../redux/selectors/plansSelector";
import BackRoute from "../components/BackRoute";

const Resumen = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const userData = useSelector(userDataSelector);
  const plan = useSelector(planSelector);

  useEffect(() => {
    dispatch(userActions.getUser());
    dispatch(userActions.getUserFromLocalStorage());
    dispatch(plansActions.getPlanFromLocalStorage());
  }, [dispatch]);
  return (
    <div>
      <BackRoute />
      <div className="px-6 md:px-80 mt-10">
        <h3 className="font-semibold text-[32px] md:text-[40px] md:mt-10">
          Resumen del seguro{" "}
        </h3>
        <div className="w-full mt-10 shadow-custom p-6 rounded-lg flex flex-col">
          <div className="text-[10px]">Precios calculados para:</div>
          <span className="text-[20px] font-bold">
            {user?.name} {user?.lastName}{" "}
          </span>
          <hr className="mt-4"></hr>
          <span className="text-[16px] font-bold mt-4">
            Responsable de pago
          </span>
          <span className="text-[14px]">DNI: {userData?.documentNumber} </span>
          <span className="text-[14px]">Celular: {userData?.phoneNumber} </span>
          <span className="text-[16px] font-bold mt-4">Plan elegido</span>
          <span className="text-[14px]">{plan?.name} </span>
          <span className="text-[14px]">
            Costo del Plan: ${plan?.price} al mes
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
