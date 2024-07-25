import classess from './ParentCart2.module.css';
const ParentCart2=(props)=>{
    return <div className={classess.card}>{props.children}</div>
}
export default ParentCart2;