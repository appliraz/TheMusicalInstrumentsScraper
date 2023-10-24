import React, { useState, useEffect, Fragment} from 'react';
import UIButton from "../Buttons/UIButton";
import { constants, variables } from "../../AppLogic/constants";
import InputComponent from "./InputComponent";
import { useUserInputs } from "../../Contexts/UserInputsContext";
import '../../Styles/Inputs.css';



export default function InputsList(){


    const [inputsCounter, setInputsCounter] = useState(1);

    const [inputs, setInputs] = useState([]);

    const [userInputs, setUserInputs] = useUserInputs();

    useEffect(()=> { addInput() }, []); //start the app with 1 empty input field

    const getNewInput = () => {
      console.log(inputsCounter)
      return { key: inputsCounter, value: "" };
    }

    const addInput = () => {
      const currentCount = inputsCounter
      setInputsCounter(currentCount+1);
      setInputs([...inputs, getNewInput()]);
    };

    const handleChange = (e, key) => {
      const newValue = e.target.value;
      const newInputs = [...inputs];
      newInputs.map(input=> {
        if(input.key == key)
          input.value = newValue;
      })
      setInputs(newInputs);
    }  
  
    const handleDelete = (e, key) => {
      const inputs_after_delete = inputs.filter((input)=>input.key!==key)
      setInputs(inputs_after_delete);
      setUserInputs(inputs_after_delete);
    }

    const handleBlur = () => {
      setUserInputs(inputs);
    }

    const inputProps = (input) => {
      let props = {
        key: input.key,
        value: input.value,
        handleDelete: (e)=>handleDelete(e, input.key),
        handleChange: (e)=>handleChange(e, input.key),
        handleBlur: () => handleBlur()
      }
      return props

    }

  return(
    <Fragment>
      <div className = { constants.CSS_CLASS_INPUTS_LIST }>
        {
          inputs.map((input) => {
          let props = inputProps(input);
          return (<InputComponent key={input.key} props={props} />)})
        }
      </div>
      <UIButton styleId = { constants.CSS_ID_ADD_BTN } handleClick = { addInput } buttonText = { constants.ADD_BTN_TEXT } disabledText = { constants.ADD_BTN_TEXT }/>
    </Fragment>
  )
    
}

