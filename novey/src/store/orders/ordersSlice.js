import { api } from "../../helpers/request";
import { setAuthHeader } from "../auth/auth";

export const orderSlice = {
  state: {
    orderList: {},
  },
  reducers: {
    sendOrderFunction: (state, payload) => {
      return {
        ...state,
        orderList: payload,
      };
    },
  },
  effects: {
    async sendOrderLoad(payload) {
      setAuthHeader("@token");
      const response = await api.post(`order/send`, payload);
      this.sendOrderFunction(response.data.data);
    },
  },
};
