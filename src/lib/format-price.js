export const formatPrice = (price) => {
  // eslint-disable-next-line no-undef
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};
