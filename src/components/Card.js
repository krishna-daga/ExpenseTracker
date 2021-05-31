import "./Card.css";
function Card(props){
    //space after card is important
    const classes= 'Card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
export default Card;