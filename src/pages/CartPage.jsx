import Cart from "../components/Cart";

function CartPage({ cartItems, onRemove }) {
  return (
    <Cart cartItems={cartItems} onRemove={onRemove} />
  );
}

export default CartPage;
