import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let max = action.payload.map((p) => p.price);
      max = Math.max(...max);
      return {
        ...state,
        filterdProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: max, price: max },
      };
    }
    case SET_GRIDVIEW:
      return { ...state, gridView: true };
    case SET_LISTVIEW:
      return { ...state, gridView: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filterdProducts } = state;
      let tempProducts = [...filterdProducts];
      if (sort === "price-lowest")
        tempProducts.sort((a, b) => a.price - b.price);
      if (sort === "price-highest")
        tempProducts.sort((a, b) => b.price - a.price);
      if (sort === "name-a")
        tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      if (sort === "name-z")
        tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      return { ...state, filterdProducts: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const { company, category, color, price, maxPrice, search, shipping } =
        state.filters;
      let tempFilterProducts = [...allProducts];

      if (search)
        tempFilterProducts = tempFilterProducts.filter((el) =>
          el.name.toLowerCase().includes(search)
        );

      if (category !== "all")
        tempFilterProducts = tempFilterProducts.filter(
          (el) => el.category === category
        );

      if (company !== "all")
        tempFilterProducts = tempFilterProducts.filter(
          (el) => el.company === company
        );
      if (color !== "all")
        tempFilterProducts = tempFilterProducts.filter((el) =>
          el.colors.includes(color)
        );
      if (price !== maxPrice)
        tempFilterProducts = tempFilterProducts.filter(
          (el) => el.price <= price
        );
      if (shipping)
        tempFilterProducts = tempFilterProducts.filter(
          (el) => el.shipping === true
        );
      return { ...state, filterdProducts: tempFilterProducts };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice,
          shipping: false,
        },
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
