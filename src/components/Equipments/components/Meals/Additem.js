import Additemform from "./Additemform";
import Additemimage from "./Additemimage";
import classes from './Additem.module.css';
function Additem(props){
    return(
        <div className={classes.row}>
            <div className={classes.column1}>
                <Additemimage></Additemimage>
            </div>
            <div className={classes.column2}>
                <Additemform username={props.username} loggedIn={props.loggedIn}></Additemform>
            </div>
        </div>
    );
}

export default Additem;