import { useFirestore } from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions')
  // const res = 0
  const amounts = transactions.map(transaction => parseInt(transaction.amount));
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

  console.log(total)
  // console.log(amounts.reduce(function(a,b){return a+b;},0));

  return (
    <><div>
      <h2> Your Balance is ₹{ total }</h2>
    </div><ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li className = {transaction.amount < 0 ? styles.minus : styles.plus} key={transaction.id}> 
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>{transaction.amount < 0 ? '-' : ''}₹{Math.abs(transaction.amount)}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        ))}
      </ul></>
  )
}

