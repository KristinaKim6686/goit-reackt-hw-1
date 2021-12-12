import PropTypes from "prop-types";
import style from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr className={style.heading}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={style.type}>{type}</td>
            <td className={style.amount}>{amount}</td>
            <td className={style.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
