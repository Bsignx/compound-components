import * as React from "react";

import RadioImageFormWrapper from "./styles";

interface Props {
  onStateChange?(e: string): void;
  defaultValue?: string;
}

interface State {
  currentValue: string;
  defaultValue?: string;
}

interface RadioInputProps {
  label: string;
  value: string;
  name: string;
  imgSrc: string;
}

interface SubmitButtonProps {
  onSubmit?(value: string): void;
}

interface ProviderState extends State {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RadioImageFormContext = React.createContext<ProviderState>({
  currentValue: "",
  defaultValue: undefined,
  onChange: () => {},
});

RadioImageFormContext.displayName = "RadioImageForm";

const RadioImageForm = ({
  children,
  defaultValue = "",
  onStateChange,
}: React.PropsWithChildren<Props>) => {
  const [state, setState] = React.useState<State>({
    currentValue: "",
    defaultValue,
  });

  const providerState = React.useMemo(
    () => ({
      onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setState({
          currentValue: value,
        });
        onStateChange?.(value);
      },
      ...state,
    }),
    [state, onStateChange]
  );

  return (
    <RadioImageFormWrapper>
      <RadioImageFormContext.Provider value={providerState}>
        {children}
      </RadioImageFormContext.Provider>
    </RadioImageFormWrapper>
  );
};

const RadioInput = ({
  label,
  value,
  name,
  imgSrc,
}: RadioInputProps): React.ReactElement => {
  const { currentValue, onChange } = React.useContext(RadioImageFormContext);

  return (
    <label className="radio-button-group" key={value}>
      <input
        type="radio"
        name={name}
        value={value}
        aria-label={label}
        onChange={onChange}
        checked={currentValue === value}
        aria-checked={currentValue === value}
      />
      <img alt="" src={imgSrc} />
      <div className="overlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check-circle"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
    </label>
  );
};

const SubmitButton = ({ onSubmit }: SubmitButtonProps): React.ReactElement => {
  const { currentValue } = React.useContext(RadioImageFormContext);

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onSubmit?.(currentValue)}
      disabled={!currentValue}
      aria-disabled={!currentValue}
    >
      Submit
    </button>
  );
};

const CurrentValue = (): React.ReactElement => {
  const { currentValue } = React.useContext(RadioImageFormContext);

  return (
    <>
      {!!currentValue && (
        <div className="alert current-value">
          <h1>Current Value: {currentValue}</h1>
        </div>
      )}
    </>
  );
};

RadioImageForm.RadioInput = RadioInput;
RadioImageForm.SubmitButton = SubmitButton;
RadioImageForm.CurrentValue = CurrentValue;

export default RadioImageForm;
