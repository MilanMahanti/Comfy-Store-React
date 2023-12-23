export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return formattedPrice;
};

export const getUniqueValues = (product, type) => {
  let unique = product.map((item) => item[type]);
  if (type === "colors") unique = unique.flat();
  return ["all", ...new Set(unique)];
};
