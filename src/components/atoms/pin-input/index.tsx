import * as Styled from "./styles";

import { useEffect, useRef, useState } from "react";

type PinInputProps = {
  digits?: number;
  onComplete: (...args: any) => any | void;
};

export default function PinInput({ digits = 6, onComplete }: PinInputProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [inputValue, setInputValue] = useState<string[]>([]);

  function handleInputsState(value: string, index: number) {
    const newInputs = [...inputValue];
    newInputs[index] = value;
    setInputValue([...newInputs]);
  }

  function handleInput(value: string, index: number) {
    if (value) {
      handleInputsState(value, index);
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
        return;
      }
    } else {
      handleInputsState(value, index);
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
        return;
      }
    }
  }

  useEffect(() => {
    const realLength = inputValue.filter((input) => input);
    if (realLength.length === digits) {
      onComplete(inputValue.join(""));
    }
  }, [inputValue]);

  return (
    <Styled.PinInputWrapper>
      {Array.from(Array(digits).keys()).map((number, index) => (
        <Styled.Input
          onChange={(e) => handleInput(e.target.value, index)}
          value={inputValue[index]}
          key={number}
          maxLength={1}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
        />
      ))}
    </Styled.PinInputWrapper>
  );
}
