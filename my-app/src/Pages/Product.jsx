import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduct, getAllProducts, setPrice, setSearch, setSortOrder } from '../Redux/Action/productAction';
import { useNavigate } from 'react-router-dom';

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredProducts, loading, filters } = useSelector((state) => state.ProductState);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Page</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={filters.search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="form-control mb-3"
      />
      <input
        type="range"
        min="0"
        max="5000"
        value={filters.price || 5000}
        onChange={(e) => dispatch(setPrice((e.target.value)))}
        className="form-range"
      />
      <p>Price under: ₹{filters.price || '∞'}</p>

      <select onChange={(e) => dispatch(setSortOrder(e.target.value))} className="form-select mb-3">
        <option value="">Sort by</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>


      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {filteredProducts.map((el, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={el.image} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">₹{el.price}</p>
                  <p className="card-text">{el.description}</p>
                  <button className="btn btn-secondary me-2" onClick={() => navigate(`/edit/${el._id}`)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => dispatch(deleteproduct(el._id))}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
