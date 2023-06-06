const API_URL = "http://localhost:3300";

const guestEndpoints = {
  showProducts: { url: API_URL + "/guest/products", method: "GET" },
  showContent: { url: API_URL + "/guest/content", method: "GET" },
  showArts: { url: API_URL + "/guest/arts", method: "GET" },
  showProductDetail: {
    url: API_URL + "/guest/product-detail",
    method: "GET",
  },
};

export default guestEndpoints;
