import { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

const PaymentSuccess = () => {
  // const {transaction_id} = useParams()
  const [searchParams] = useSearchParams();
   const transaction_id = searchParams.get('transaction_id');


  useEffect(() => {
    if (transaction_id) {
      axios.get(
        `https://api.buywaterh2o.com/api/pay/verify/${transaction_id}`
      );
    }
  }, [transaction_id]);
  
//5061 2012 2024 1030 095
  return <h2>Verifying payment... </h2>;
};

export default PaymentSuccess;
