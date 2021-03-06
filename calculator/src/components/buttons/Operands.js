import React from "react";
import { useDispatch } from "react-redux";

function Operands(props) {
  const dispatch = useDispatch();

  function handleOperandClick() {
    dispatch({
      type: "@calculate/operand",
      number: props.operand
    })
  }

  return (
    <div className="box operands numbers" onClick={handleOperandClick}>
      <span>{props.operand}</span>
    </div>
  )
}

export default Operands;