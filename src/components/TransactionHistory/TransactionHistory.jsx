import css from './TransactionHistory.module.css';

export default function TransactionHistory({items}) {
    return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
      </thead>

    <tbody className={css.tableBody}>
        {items.map((item, index ) => (
           <tr key={item.id} className={(index % 2 === 0) ? [css.odd] : [css.even]}>
                <td className={css.tableColumn}>{item.type}</td>
                <td className={css.tableColumn}>{item.amount}</td>
                <td className={css.tableColumn}>{item.currency}</td>                        
            </tr>))}
  </tbody>
</table>
)
}