import React from "react";
import PropTypes from "prop-types";
import Transactions from "./Transactions";

const TransactionHistory = ({ items }) => (
  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <Transactions type={type} amount={amount} currency={currency} />
      </tr>
    ))}
  </tbody>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.symbol.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
