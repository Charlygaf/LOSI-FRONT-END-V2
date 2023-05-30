const guestEndpoints = {
  showProducts: { url: process.env.API_URL + "/guest/products", method: "GET" },
  showContent: { url: process.env.API_URL + "/guest/content", method: "GET" },
  showArts: { url: process.env.API_URL + "/guest/arts", method: "GET" },
  showProductDetail: {
    url: "/guest/product-detail",
    method: "GET",
  },
};

export default guestEndpoints;
