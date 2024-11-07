
import React from "react";

function TableRow({ item, index }) {
  const total = item.qty * item.unit_cost;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.unit_cost}</td>
      <td>{item.qty}</td>
      <td>{total.toLocaleString()}</td>
    </tr>
  );
}

export default TableRow;
