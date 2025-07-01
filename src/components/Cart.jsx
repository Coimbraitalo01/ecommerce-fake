function Cart({ cartItems, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} style={{ marginBottom: "1rem" }}>
              {item.name} - R$ {item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => onRemove(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
