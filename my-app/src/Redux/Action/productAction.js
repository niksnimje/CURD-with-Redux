
import axios from 'axios';

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "Get_Product_Req" });
  try {
    const res = await axios.get("http://localhost:8080/product/get");
    dispatch({ type: "Get_Product_Suc", payload: res.data.products });
  } catch (error) {
    dispatch({ type: "Get_Product_Fail", payload: error.message });
  }
};

export const deleteproduct = (id) => async (dispatch) => {
  dispatch({ type: "Delete_Product_Req" });
  try {
    await axios.delete(`http://localhost:8080/product/delete/${id}`);
    dispatch(getAllProducts());
  } catch (error) {
    dispatch({ type: "Delete_Product_Fail", payload: error.message });
  }
};

export const addData = (data) => async (dispatch) => {
  dispatch({ type: "ADD_Product_Req" });
  try {
    await axios.post("http://localhost:8080/product/post", data);
    dispatch(getAllProducts());
  } catch (error) {
    dispatch({ type: "ADD_Product_Fail", payload: error.message });
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  dispatch({ type: "Update_Product_Req" });
  try {
    await axios.put(`http://localhost:8080/product/update/${id}`, data);
    dispatch(getAllProducts());
  } catch (error) {
    dispatch({ type: "Update_Product_Fail", payload: error.message });
  }
};

export const setSearch = (text) => ({
  type: "SET_SEARCH",
  payload: text
});



export const setPrice = (price) => ({
  type: 'SET_PRICE',
  payload: price
});

export const setSortOrder = (order) => ({
  type: "SET_SORT_ORDER",
  payload: order
});
