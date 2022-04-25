import React, { useState } from "react";
import "./pages/App.css";
import PayPal from "./PayPal";

function Paypage() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="Paypage">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Paypage;
