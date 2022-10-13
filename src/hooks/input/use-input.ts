import { useReducer, ChangeEvent } from "react";
import { Action } from "../../shared/models/action.interface";
import { ValidatorFn } from "../../utils/validatorFn";
import {
  InputActionType,
  INPUT_ACTION_BLUR,
  INPUT_ACTION_CHANGE,
  INPUT_ACTION_CLEAR,
} from "./models/input-action";
import { InputState } from "./models/input-state.interface";

const initialState: InputState = {
  text: "",
  hasBeenTouched: false,
};

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
  const { type, value = "" } = action;

  switch (type) {
    case INPUT_ACTION_CHANGE:
      return { text: value, hasBeenTouched: state.hasBeenTouched };
    case INPUT_ACTION_BLUR:
      return { text: state.text, hasBeenTouched: true };
    case INPUT_ACTION_CLEAR:
      return { text: "", hasBeenTouched: false };
    default:
      return { ...state };
  }
};

const useInput = (validatorFn?: ValidatorFn) => {
  const [{ text, hasBeenTouched }, dispatch] = useReducer(
    inputReducer,
    initialState
  );

  let shouldDisplayError = null;

  if (validatorFn) {
    const isValid = validatorFn(text);
    shouldDisplayError = !isValid && hasBeenTouched;
  }

  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: INPUT_ACTION_CHANGE, value: e.target.value });
  };

  const blurChandler = () => {
    dispatch({ type: INPUT_ACTION_BLUR });
  };

  const clearHandler = () => {
    dispatch({ type: INPUT_ACTION_CLEAR });
  };

  return {
    text,
    shouldDisplayError,
    textChangeHandler,
    blurChandler,
    clearHandler,
  };
};

export default useInput;
