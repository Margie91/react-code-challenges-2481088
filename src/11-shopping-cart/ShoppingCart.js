import { useReducer } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

const addToCart = (state, item) => {
  const itemIndex = state.findIndex((cartItem) => cartItem.name === item.name);

  if (itemIndex > -1) {
    const newState = JSON.parse(JSON.stringify(state));
    newState[itemIndex].quantity += 1;
    return newState;
  } else {
    return [...state, { ...item, quantity: 1 }];
  }
};

const increaseQuantity = (state, item) => {
  const itemIndex = state.findIndex((cartItem) => cartItem.name === item.name);
  const newState = JSON.parse(JSON.stringify(state));
  newState[itemIndex].quantity += 1;
  return newState;
};

const decreaseQuantity = (state, item) => {
  const itemIndex = state.findIndex((cartItem) => cartItem.name === item.name);
  let newState = JSON.parse(JSON.stringify(state));
  if (newState[itemIndex].quantity === 1) {
    newState = newState.filter((_, index) => index !== itemIndex);
  } else {
    newState[itemIndex].quantity -= 1;
  }
  return newState;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action.payload);
    case "INCREASE_QUANTITY":
      return increaseQuantity(state, action.payload);
    case "DECREASE_QUANTITY":
      return decreaseQuantity(state, action.payload);
    default:
      return state;
  }
};

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.length ? (
            cart.map((item) => (
              <div key={item.name}>
                <h3>{item.name}</h3>
                <p>
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE_QUANTITY", payload: item })
                    }
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE_QUANTITY", payload: item })
                    }
                  >
                    +
                  </button>
                </p>
                <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>Add an item to cart</p>
          )}
        </div>
      </div>
      <div className="total">
        <h2>
          Total:
          {cart
            .reduce((acc, currVal) => {
              return acc + currVal.quantity * currVal.price;
            }, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
