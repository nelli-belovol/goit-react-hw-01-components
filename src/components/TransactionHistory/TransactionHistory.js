import s from './Transaction.module.scss';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <>
      <table className={s.transaction__history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(transaction => {
            return (
              <tr className={s.transaction__item} key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
