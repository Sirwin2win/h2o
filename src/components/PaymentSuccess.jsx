import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchByOrderRef
} from "../features/orders/orderSlice";
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const transactionId = searchParams.get("transaction_id");
  const orderRefParam = searchParams.get("order_ref");
console.log(orderRefParam)
  const {refStatus} = useSelector((state) => state.orders);


useEffect(() => {
  if (orderRefParam) {
    dispatch(fetchByOrderRef(orderRefParam));
  }
}, [orderRefParam, dispatch]);

useEffect(() => {
  if (refStatus === "succeeded") {
    navigate("/order", { replace: true });
  }
}, [refStatus, navigate]);

  return <h2>Verifying payment...</h2>;
};

export default PaymentSuccess;

  