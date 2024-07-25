import classes from './EquipmentFilter.module.css';
import FilterByPrice from './FilterForm/FilterByPrice';

import FilterSearch from './FilterForm/FilterSearch';
import {useState} from 'react';


const EquipmentFiter=()=>{
   //   return <div>
   //      vansh
   //   </div>
   
   // Search
   const [SearchText,setSearchTest] = useState("");
   const SubmitSearch=(event)=>{
      event.preventDefault();
      console.log(SearchText);
   }
   const SearchOnChangeHandler=(e)=>{
         setSearchTest(e.target.value);
   }

   //Type
   // const [isRent,setIsRent] = useState("");
   // const [isBuy,setIsBuy] = useState("");
   // const SubmitType = (event) => {
   //    event.preventDefault();
   //    console.log(isRent,isBuy);
   // }

   // const TypeOnChangeHandler = e =>{
      
   // }

   // Price
   // const [isPriceCheck,setIsPrice] = useState("");
   const [maxValue,setMaxValue] = useState("");
   function MaxValueChangeHandler(e){
      setMaxValue(e.target.value);
   }
   function SubmitValue(event){
      event.preventDefault();
      console.log(maxValue);
   }

   return (
      <div className={classes.card}>
          <fieldset className={classes.sortContainer}>
          <legend className={classes.heading}>Sort Items</legend>
            <FilterSearch OnSave={SubmitSearch} onChange={SearchOnChangeHandler} value={SearchText}/>
            <FilterByPrice OnSave={SubmitValue} onChange={MaxValueChangeHandler} value={maxValue}/> 
          </fieldset>
      </div>
   );
}
export default EquipmentFiter;

