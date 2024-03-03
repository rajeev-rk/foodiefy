import ProductCard from './ProductCard';

const Cart = ({ cartItems, handleDecreaseQuantity, handleIncreaseQuantity }) => {
  return (
    <div>
      {cartItems.map((cartItem) => (
        <ProductCard
          key={cartItem.id}
          item={cartItem}
          isInCart={cartItem}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
        />
      ))}
    </div>
  );
};

export default Cart;
