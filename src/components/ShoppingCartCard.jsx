import React, { useEffect ,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../features/orders/orderSlice";
import {
  increaseCart,
  descreaseCart,
  removeFromCart,
  clearCart,
} from "../features/carts/cartSlice";

// 5061 2012 2024 1030 095

const ShoppingCartCard = () => {
  const { orderRef } = useSelector((state) => state.orders);
  // console.log(cartItems)
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(user.id)
  
      const [form, setForm] = useState({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        shipping_address: '',
      })
    const {customer_name,customer_email,customer_phone,shipping_address} = form
      const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault();
    // const fullName = `${user.firstName} ${user.lastName}`;
    const checkout = {
      totalAmount,
      userId: user.id,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
      items: cartItems.map((item) => ({
        product_id: item.id,
        product_name: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    // console.log(checkout);
    dispatch(createOrder(checkout));

    console.log(orderRef);
  };
   useEffect(() => {
        if (orderRef) {
          // Either open in new tab
          window.open(orderRef.checkout_url, '_blank');
    
          // Or redirect in same tab
          // window.location.href = checkout_url;
  
        }
      }, [orderRef]);
  // useEffect(() => {
  //   if (orderRef) {
  //     navigate("/pay", {
  //       state: {
  //         orderRef,
  //         totalAmount,
  //       },
  //     });
  //   }
  // }, [orderRef, totalAmount, navigate]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{totalQuantity} Item(s)</h2>
          </div>
          {cartItems.map((item) => (
            <div
              className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
              key={item.id}
            >
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={`https://api2.buywaterh2o.com/${item.image}`}
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src={`https://api2.buywaterh2o.com/${item.image}`}
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  S/N
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    {item.title}
                  </p>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  Quantity: {item.quantity}
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">
                  Price: ₦{item.price}
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center rounded-lg border overflow-hidden mt-10 w-30">
                  {/* <button id="addToCart" className="ml-auto flex-1 lg:flex-none  text-blue-700 font-semibold rounded-lg px-6 py-3 shadow">Continue Shopping</button> */}
                  <button
                    id="dec"
                    className="px-4 py-2 text-lg bg-white hover:bg-gray-100"
                    onClick={() => dispatch(descreaseCart(item.id))}
                  >
                    −
                  </button>
                  {/* <input id="qty" type="number" value="1" min="1" max="10" className="w-16 text-center outline-none p-2" aria-label="Quantity" /> */}
                  <p>{item.quantity}</p>

                  <button
                    id="inc"
                    className="px-4 py-2 text-lg bg-white hover:bg-gray-100"
                    onClick={() => dispatch(increaseCart(item.id))}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <button
                      className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 ml-9">
                    Price x Quantity: ₦{item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <Link
            to={"/product"}
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div
          id="summary"
          className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Number of Items : <span> {totalQuantity}</span>
            </span>
            <span className="font-semibold text-sm">₦{totalAmount}</span>
          </div>

          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 rounded px-5 py-2 text-sm text-white uppercase"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <form >
            
          <div className="py-2">
            <label
              htmlFor="customer_name"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="p-2 text-sm w-full border border-blue-400 rounded-lg"
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="customer_email"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Customer Email
            </label>
            <input
              type="text"
              id="customer_email"
              name="customer_email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="p-2 text-sm w-full border border-blue-400 rounded-lg"
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="customer_phone"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Customer Phone
            </label>
            <input
              type="text"
              id="customer_phone"
              name="customer_phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              className="p-2 text-sm w-full border border-blue-400 rounded-lg"
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="shipping_address"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Shipping Address
            </label>
            <input
              type="text"
              id="shipping_address"
              name="shipping_address"
              placeholder="Enter your address"
              onChange={handleChange}
              className="p-2 text-sm w-full border border-blue-400 rounded-lg"
            />
          </div>
          {/* </form> */}
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>₦{totalAmount}</span>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Checkout(₦{totalAmount})
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
