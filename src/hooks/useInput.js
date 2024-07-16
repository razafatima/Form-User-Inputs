import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const[enteredValues, setEnteredValues] = useState(defaultValue);
  const valueIsValid = validationFn(enteredValues)

 const [didEdit, setDidEdit] = useState(false);
 
 function handleInputBlur(identifier){
  setDidEdit(true);

}

function handleEnteredValue(event){
setEnteredValues(event.target.value);
setDidEdit(false);
}
return{
  value:enteredValues,
  handleEnteredValue,
  handleInputBlur,
  hasError: didEdit && !valueIsValid
}
}
