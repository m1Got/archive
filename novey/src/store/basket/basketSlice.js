import { api } from "../../helpers/request";
import { setAuthHeader } from "../auth/auth";

export const basketSlice = {
  state: {
    getFavouriteProduct: [],
    getBasketProductsList: [],
    basketAllPrice: 0,
    compareProducts: [],
    statusInfo: [],
  },
  reducers: {
    getFavouriteProductFuntion: (state, payload) => {
      return {
        ...state,
        getFavouriteProduct: payload,
      };
    },
    GetBasketProductsFuntion: (state, payload) => {
      return {
        ...state,
        getBasketProductsList: payload,
      };
    },
    allPriceBasketFunction: (state, payload) => {
      const basketAllPrice = state.getBasketProductsList.reduce(
        (prev, next) => prev + next.price,
        0
      );

      return {
        ...state,
        basketAllPrice,
      };
    },
    getCompareProduct: (state, payload) => {
      return {
        ...state,
        compareProducts: payload,
      };
    },
    getStatusOrder: (state, payload) => {
      return {
        ...state,
        statusInfo: payload,
      };
    },
  },
  effects: (dispatch) => ({
    //izbranniyga qoshish productni
    async loadPostFavouriteProduct(payload, state) {
      setAuthHeader("@token");
      const response = await api.post("/product/set-favorite", payload);
      const newProd = response.data.data;
      const products = state.productSlice.newProductList.map((item) => {
        if (item.id == newProd.id) {
          return newProd;
        }
        return item;
      });
      const popularProducts = state.productSlice.popularProductList.map(
        (item) => {
          if (item.id == newProd.id) {
            return newProd;
          }

          return item;
        }
      );

      const newProducts = state.productSlice.newProductList.map((item) => {
        if (item.id == newProd.id) {
          return newProd;
        }

        return item;
      });
      const similarProducts = state.productSlice.similarProductList.map(
        (item) => {
          if (item.id == newProd.id) {
            return newProd;
          }

          return item;
        }
      );
      const productPriceDownList = state.productSlice.productPriceDownList.map(
        (item) => {
          if (item.id == newProd.id) {
            return newProd;
          }

          return item;
        }
      );
      const deleteFavouriteProduct = state.basketSlice.getFavouriteProduct.map(
        (item) => {
          if (item.id == newProd.id) {
            return newProd;
          }
          return item;
        }
      );

      dispatch.productSlice.newProductFuntion(newProducts);
      dispatch.productSlice.similarProductFunction(similarProducts);
      dispatch.productSlice.productPriceDownFunction(productPriceDownList);
      dispatch.productSlice.popularProductFunction(popularProducts);
      dispatch.basketSlice.getFavouriteProductFuntion(products);
      dispatch.basketSlice.getFavouriteProductFuntion(deleteFavouriteProduct);
    },
    //izbranniydagi productlarni olish
    async loadGetFavouriteProduct() {
      setAuthHeader("@token");
      const response = await api.get("/product/favorites");
      this.getFavouriteProductFuntion(response.data.data);
    },
    //korzinaga qoshish
    async loadPostProductToBasket(payload, state) {
      setAuthHeader("@token");
      const response = await api.post("/cart/add", payload);
      const newBasketProd = response.data.data;
      const productsBasket = state.basketSlice.getBasketProductsList.map(
        (item) => {
          if (item.product?.id == newBasketProd?.product?.id) {
            return newBasketProd;
          }
          return item;
        }
      );
      dispatch.basketSlice.GetBasketProductsFuntion(productsBasket);
      this.allPriceBasketFunction();
    },
    //korzinadan productlarni olish
    async loadGetBasketProducts() {
      setAuthHeader("@token");
      const response = await api.get("/cart");
      this.GetBasketProductsFuntion(response.data.data);
      this.allPriceBasketFunction();
    },
    //productni udalit qilish
    async loadDeleteBasketProduct(payload, state) {
      setAuthHeader("@token");
      const response = await api.post("/cart/minus", payload);
      this.GetBasketProductsFuntion(response.data.data);
      this.allPriceBasketFunction();
    },

    //sravnit qilish
    async loadСompare(payload) {
      const response = await api.post("/product/set-compare", payload);
    },
    async loadGetСompare(payload) {
      const response = await api.get("/product/compares", payload);
      this.getCompareProduct(response.data.data);
    },
    async loadStatus() {
      const response = await api.get("/order");
      this.getStatusOrder(response.data.data);
    },
  }),
};
