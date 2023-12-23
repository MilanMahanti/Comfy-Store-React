import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At Comfy Sloth, we're dedicated to bringing you a curated selection of the coziest products, from plush blankets to trendy loungewear and charming home decor.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Every item in our collection is handpicked for its quality, style, and, most importantly, its ability to bring joy and relaxation into your life. ",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: " Join us on a journey to discover the joy of comfort at Comfy Sloth. Whether you're shopping for yourself or looking for the perfect gift, our diverse range ensures there's something for everyone. ",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
