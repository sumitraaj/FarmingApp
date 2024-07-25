import classess from './ParentCart.module.css';
const ParentCart=(props)=>{
    return <div className={classess.card}>{props.children}</div>
}
export default ParentCart;