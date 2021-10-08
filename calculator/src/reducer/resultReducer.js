export const resultReducer = (state = {
  currentNumber: "0",
  previousNumber: null,
  operator: null,
  total: 0, 
  memory: null,
  isEqualSymbol: false,
}, action) => {

  function mathOperation(prevVal, currVal, operator) {
    switch(operator) {
      case "/":
        return Number(prevVal) / Number(currVal);
      case "X":
        return Number(prevVal) * Number(currVal);
      case "-":
        return Number(prevVal) - Number(currVal);
      case "+":
        return Number(prevVal) + Number(currVal);
      default:
        break;
    }
  }

  switch (action.type) {
    case "@calculate/operand":
      if (state.isEqualSymbol) {
        return {
          ...state,
          currentNumber: action.number,
          previousNumber: null,
          operator: null,
          total: 0, memory: null,
          isEqualSymbol: false
        }
      }
      if (state.currentNumber === "0" || state.currentNumber === null) {
        return {
          ...state,
          currentNumber: action.number
        }
      }
      return {
        ...state,
        currentNumber: state.currentNumber.concat(action.number)
      }

    case "@calculate/operator":
      if (state.isEqualSymbol) {
        return {
          ...state,
          currentNumber: "0",
          previousNumber: null,
          operator: action.operator,
          total: 0, 
          memory: null,
          isEqualSymbol: false
        }
      }
      if (state.operator && !state.currentNumber) {
        return {
          ...state,
          operator: action.operator
        }
      }
      if (state.currentNumber && !state.previousNumber) {
        return {
          ...state,
          previousNumber: state.currentNumber,
          currentNumber: null,
          operator: action.operator
        }
      }
      return {
        ...state,
        total: mathOperation(state.previousNumber, state.currentNumber, state.operator),
        previousNumber: String(mathOperation(state.previousNumber, state.currentNumber, state.operator)),
        currentNumber: null,
        operator: action.operator
      }
      
    case "@calculate/equal":
      if ((!state.previousNumber && state.currentNumber === "0") || state.isEqualSymbol) {
        return {
          ...state
        }
      }
      if (state.currentNumber && !state.operator) {
        return {
          ...state,
          isEqualSymbol: true
        }
      }
      if (state.currentNumber && state.previousNumber) {
        return {
          ...state,
          currentNumber: String(mathOperation(state.previousNumber, state.currentNumber, state.operator)),
          isEqualSymbol: true
        }
      }
      return {
          ...state,
          currentNumber: String(mathOperation(state.previousNumber, state.previousNumber, state.operator)),
          isEqualSymbol: true
      }
    default:
      if (action.memory === "C") {
        return {
          ...state,
          currentNumber: "0",
          previousNumber: null,
          operator: null,
          total: 0,
          isEqualSymbol: false
        }
      }
      if (action.memory === "M+") {
        if (state.total) {
          return {
            ...state,
            memory: String(state.total)
          }
        }
        return {
          ...state,
          memory: String(state.currentNumber)
        }
      }
      if (action.memory === "M-") {
        if (state.total) {
          return {
            ...state,
            memory: String(state.total * -1)
          }
        }
        return {
          ...state,
          memory: String(state.currentNumber * -1)
        }
      }
      return {
        ...state,
        currentNumber: state.memory
      } 
  }
};

export default resultReducer;