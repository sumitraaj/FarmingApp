import classes from './Card.module.css';
const Card= props=>{
    return (<div className={classes.card} >
        <span className={classes.name}>items name: {props.name}</span>
        <span className={classes.amount}>amount: {props.amount}</span>
        <span className={classes.price}>price: {props.price}</span>
    </div>)
};
export default Card;