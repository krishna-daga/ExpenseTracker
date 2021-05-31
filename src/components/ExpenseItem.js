import "./ExpenseDate.js"
import Card from "./Card.js"
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
    </Card>
  );
}
//export this function as default for this file
export default ExpenseItem;
