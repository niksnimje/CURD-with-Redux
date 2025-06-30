const initialState = {
  allProducts: [],
  filteredProducts: [],
  loading: false,
  filters: {
  search: '',
  price: null,
  sort: ''
  }
};

const applyFilter = (products, filters) => {
  let filtered = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchPrice = filters.price ? p.price <= filters.price : true;
    return matchSearch && matchPrice;
  });

  if (filters.sort === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sort === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }
  return filtered;
};

export function ProdcutReducer(state = initialState, action) {
  switch (action.type) {
    case "Get_Product_Req":
      return { ...state, loading: true };
    case "Get_Product_Suc":
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: applyFilter(action.payload, state.filters),
        loading: false
      };
    case "Get_Product_Fail":
      return { ...state, loading: false };
    case "SET_SEARCH": {
      const updatedFilters = { ...state.filters, search: action.payload };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: applyFilter(state.allProducts, updatedFilters)
      };
    }
    case "SET_PRICE": {
      const updatedFilters = { ...state.filters, price: action.payload };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: applyFilter(state.allProducts, updatedFilters)
      };
    }
    case "SET_SORT_ORDER": {
      const updatedFilters = { ...state.filters, sort: action.payload };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: applyFilter(state.allProducts, updatedFilters)
      };
    }
    default:
      return state;
  }
} 