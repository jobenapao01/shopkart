import "./productpage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//actions
import { getProductDetails as listProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import { useParams, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const getProductDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = getProductDetails;

  useEffect(() => {
    if (product && params.id !== product._id) {
      dispatch(listProductDetails(params.id));
    }
  }, [dispatch, product, params]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate("/cart");
  };

  return (
    <div className="productpage">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productpage__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className="left__info">
              <p className="left__name">Product: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="productpage__right">
            <div className="right__info">
              <p>
                Price: <span>${product.price * qty}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                QTY:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option value={x + 1} key={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
