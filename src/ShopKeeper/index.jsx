// ShopKeeperApp.js
import React from "react";
import items from "./items";
import TableRow from "./TableRow.jsx"; 
import "./index.css";

function ShopKeeperApp() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <TableRow key={index} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShopKeeperApp;
