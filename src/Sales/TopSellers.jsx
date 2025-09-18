import React from "react";
import { Card } from "react-bootstrap";
// import { BiRupee } from "react-icons/bi";
import ItemsSlider from "../components/ItemsSlider";

import Ace from "../images/top/Ace Elec 20000 MAh.jpg";
import Black from "../images/top/Black & White Scotch.jpg";
import Century from "../images/top/Century 43 Inches Smart.jpg";
import EAGEAT from "../images/top/EAGEAT 10 Speed.jpg";
import ECOFLOW from "../images/top/ECOFLOW 1024WH.jpg";
import Glamster from "../images/top/Glamster 18 inches Rechargeable Fan.jpg";
import Hikers from "../images/top/Hikers 32 inches Framel.jpg";
import itel from "../images/top/itel.jpg";
import Monospec from "../images/top/Monospec Sneakers.jpg";
import NIVEApearl from "../images/top/NIVEA Pearl & Beauty.jpg";
import NIVEAsun from "../images/top/NIVEA Sun UV.jpg";
import Oraimo from "../images/top/Oraimo SpaceBuds Neo.jpg";
import SILVER from "../images/top/SILVER CREST L.jpg";
import SunKing from "../images/top/Sun King Pico 50.jpg";
import XIAOMI from "../images/top/XIAOMI REDMI A5.jpg";

const TopSellers = () => {
  const topDealsItems = [
    { title: "HITHIUM HeroEE 1kWh", price: 10, img: Ace },
    { title: "HITHIUM HeroEE 2kWh", price: 20, img: Black },
    { title: "HITHIUM Photovoltic", price: 30, img: Century },
    { title: "HITHIUM HeroEE 8kWh", price: 30, img: EAGEAT },
    { title: "Ace Elec Power Bank", price: 30, img: ECOFLOW },
    { title: "Alagzi 2025 Men's Fashionable ", price: 30, img: Glamster },
    { title: "Dear Pendant Chain", price: 30, img: Hikers },
    { title: "EAGEAT Metal Foldable", price: 30, img: itel },
    { title: "Guasha Tool Heart-Shape", price: 30, img: Monospec },
    { title: "LCD Digital Transparent", price: 30, img: NIVEApearl },
    { title: "Minoxodal Hair growth", price: 30, img: NIVEAsun },
    { title: "Nature Field 12", price: 30, img: Oraimo },
    { title: "SILICONE LED DIGITAL", price: 30, img: SILVER },
    { title: "Sonivia Powerful Bluetooth", price: 30, img: SunKing },
    { title: "Women Handbags Shoul", price: 30, img: XIAOMI },
    // Add more items as needed
  ];

  return (
    <ItemsSlider title="Top Sellers">
      {topDealsItems.map((item, index) => (
        <span
          key={index}
          style={{ marginLeft: "-100px", backgroundColor: "white" }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={item.img}
              style={{
                height: "200px",
                width: "150px",
                paddingTop: "5px",
              }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <span className="actual-price">₦{item.price}</span>
                <span className="mrp-price">
                  <strike>₦{item.price}</strike>
                  <span
                    className="save-price

"
                  >
                    16% off
                  </span>
                </span>
                <span className="save-price">Save ₦{item.price}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </span>
      ))}
    </ItemsSlider>
  );
};

export default TopSellers;