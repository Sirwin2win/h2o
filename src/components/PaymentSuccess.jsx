import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { verifyPay } from "../features/orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentSuccess = () => {
  // const {transaction_id} = useParams()
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verifyStatus } = useSelector((state) => state.orders);
  const transaction_id = searchParams.get("transaction_id");

  useEffect(() => {
    if (transaction_id) {
      dispatch(verifyPay(transaction_id));
    }
  }, [transaction_id]);

  useEffect(() => {
    if (verifyStatus) {
      navigate("/oders");
    }
  }, [verifyStatus]);

  //5061 2012 2024 1030 095
  return <h2>Verifying payment... </h2>;
};

export default PaymentSuccess;
