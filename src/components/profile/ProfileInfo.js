import classes from './ProfileInfo.module.css';
import Card from './Card';
import ParentCart from './ParentCart';
const ProfileInfo = (props) => {
    return(
        <ParentCart>
            <div className={classes.detail}>
  User  : {props.username}
  </div>
  <div className={classes.detail}>
  Email : {props.email}
  </div>
  <div className={classes.detail}>
  City  : {props.City}
  </div>
  <div className={classes.detail}>
  Country : {props.Country} 
  </div>
  <div className={classes.detail}>
  Address : {props.address}
  </div>
  <div className={classes.detail}>
  Mobile Number : {props.mobilenumber}
  </div>
        </ParentCart>
    )
};

export default ProfileInfo;