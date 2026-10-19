import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrderByUserId } from '../features/orders/orderSlice'

const Orders = () => {
  const {order, orderStatus} = useSelector(state=>state.orders)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(orderStatus==='idle'){
      dispatch(fetchOrderByUserId())
    }
  },[dispatch,orderStatus])
  console.log(order)
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11 ? "st" :
    day % 10 === 2 && day !== 12 ? "nd" :
    day % 10 === 3 && day !== 13 ? "rd" : "th";
  const month = date.toLocaleString("en-GB", {
    month: "short",
  });
  const year = date.getFullYear();
  return `${day}${suffix}, ${month} ${year}`;
};
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
  <div className="mx-auto max-w-4xl">
    {/* Page Header */}
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        My Orders
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Track your purchases and view order details.
      </p>
    </div>
    {/* Orders List */}
    <div className="space-y-6">
      {order.map((v) => (
        <div
          key={v.id}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
        >
          {/* Order Header */}
          <div className="flex flex-col gap-4 border-b border-gray-100 bg-gray-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Order Reference
              </p>
              <h2 className="mt-1 break-all text-lg font-bold text-gray-900">
                {v.order_ref}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Placed on {formatDate(v.created_at)}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold capitalize text-green-700">
                Payment: {v.payment_status}
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold capitalize text-blue-700">
                Order: {v.order_status}
              </span>
            </div>
          </div>
          {/* Product Details */}
          <div className="p-5 sm:p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">
              Products Ordered ({v.items?.length || 0})
            </h3>
            <div className="space-y-4">
              {v.items?.length > 0 ? (
                v.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    {/* Product Image and Information */}
                    <div className="flex min-w-0 items-start gap-4">
                      {item.product_image ? (
                        <img
                          src={`https://api2.buywaterh2o.com/${item.product_image}`}
                          alt={item.product_title || "Ordered product"}
                          className="h-20 w-20 shrink-0 rounded-xl border border-gray-200 bg-white object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m7.5 4.27 9 5.15" />
                            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                            <path d="m3.3 7 8.7 5 8.7-5" />
                            <path d="M12 22V12" />
                          </svg>
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="break-words font-semibold text-gray-900">
                          {item.product_title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Product ID: {item.product_id}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          Qty: {item.quantity} ×{" "}
                          {v.currency === "NGN" ? "₦" : `${v.currency} `}
                          {Number(item.unit_price).toLocaleString("en-NG", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                        {item.created_at && (
                          <p className="mt-2 text-xs text-gray-400">
                            Item added: {formatDate(item.created_at)}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Item Subtotal */}
                    <div className="border-t border-gray-200 pt-3 sm:shrink-0 sm:border-0 sm:pt-0 sm:text-right">
                      <p className="text-xs text-gray-500">
                        Item Subtotal
                      </p>
                      <p className="mt-1 font-bold text-gray-900">
                        {v.currency === "NGN" ? "₦" : `${v.currency} `}
                        {Number(item.subtotal).toLocaleString("en-NG", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="rounded-lg bg-gray-50 p-4 text-sm text-gray-500">
                  No product details available for this order.
                </p>
              )}
            </div>
            {/* Payment Details */}
            <div className="mt-5 flex flex-col gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Paid on: {v.paid_at ? formatDate(v.paid_at) : "Not available"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Empty State */}
    {order.length === 0 && (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          No orders yet
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Your purchases will appear here once you place an order.
        </p>
      </div>
    )}
  </div>
</div>
  )
}
export default Orders