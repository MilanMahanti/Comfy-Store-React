import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, amount, color, product } = action.payload;
      const tempItem = state.cart.find((el) => el.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            if (newAmount > item.maxQuantity) {
              newAmount = item.maxQuantity;
            }
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          amount,
          color,
          image: product.images[0].url,
          maxQuantity: product.stock,
          price: product.price,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    case REMOVE_CART_ITEM:
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: itemId, value } = action.payload;
      const tempCartItem = state.cart.map((el) => {
        if (el.id === itemId) {
          if (value === "inc") {
            let newAmount = el.amount + 1;
            if (newAmount > el.maxQuantity) {
              newAmount = el.maxQuantity;
            }
            return { ...el, amount: newAmount };
          }
          if (value === "dec") {
            let newAmount = el.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...el, amount: newAmount };
          }
        }
        return el;
      });
      return { ...state, cart: tempCartItem };
    case COUNT_CART_TOTALS:
      const { totalItems, totalPrice } = state.cart.reduce(
        (total, cartItem) => {
          total.totalItems += cartItem.amount;
          total.totalPrice += cartItem.amount * cartItem.price;
          return total;
        },
        { totalItems: 0, totalPrice: 0 }
      );
      return { ...state, totalItems, totalPrice };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
