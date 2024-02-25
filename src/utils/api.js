import axios from "axios";
import { REACT_APP_DEV_URL, REACT_APP_STRIPE_APP_KEY } from "./urls";

const params = {
  headers: {
    Authorization: "bearer " + REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(REACT_APP_DEV_URL + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: REACT_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + REACT_APP_STRIPE_APP_KEY,
  },
});
