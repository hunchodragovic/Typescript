import PropTypes from "prop-types";

const Card = ({ product }) => {
  return (
    <div>
      <h1>Title: {product.title}</h1>
      <p>Desc: {product.desc}</p>
      <strong>Price: {product.price}</strong>
      <span style={{ display: "block" }}>{product.rate}</span>
    </div>
  );
};

// Add prop validation
Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
