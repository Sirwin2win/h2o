// import React, { useState, useRef } from "react";
// import "./FlashStyle.css";
// // import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
// import {
//   IoIosArrowDroprightCircle,
//   IoIosArrowDropleftCircle,
// } from "react-icons/io";
// import { SlTag } from "react-icons/sl";
// // import { Container } from "react-bootstrap";
// // ₦
// const ItemsSlider = ({ title, children }) => {
//   let scrl = useRef(null);
//   const [scrollX, setscrollX] = useState(0);
//   const [scrollEnd, setScrollEnd] = useState(false);

//   const slide = (shift) => {
//     scrl.current.scrollBy({
//       left: shift,
//       behavior: "smooth",
//     });

//     scrl.current.scrollLeft += shift;
//     setscrollX(scrollX + shift);
//     if (
//       Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
//       scrl.current.offsetWidth
//     ) {
//       setScrollEnd(true);
//     } else {
//       setScrollEnd(false);
//     }
//   };

//   const scrollCheck = () => {
//     setscrollX(scrl.current.scrollLeft);
//     if (
//       Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
//       scrl.current.offsetWidth
//     ) {
//       setScrollEnd(true);
//     } else {
//       setScrollEnd(false);
//     }
//   };

//   return (
//     <div fluid className="my-3 py-3 item-slider-container px-20">
//       <div className="d-flex titleColor py-2 ps-4">
//         <SlTag size={30} className="text-warning" />
//         <h4 className="px-3 item-title">{title}</h4>
//       </div>
//       <div className="item-slider">
//         <div
//           onClick={() => slide(-100)}
//           className={`left-arrow-left ${scrollX < 1 ? "is-disabled-hide" : ""}`}
//         >
//           <IoIosArrowDropleftCircle size={50} />
//         </div>
//         <div ref={scrl} onScroll={scrollCheck} className="item-container">
//           {children}
//         </div>
//         <div
//           className={`right-arrow-right ${
//             !scrollEnd ? "" : "is-disabled-hide"
//           }`}
//           onClick={() => slide(+100)}
//         >
//           <IoIosArrowDroprightCircle size={50} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemsSlider;