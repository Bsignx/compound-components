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
  key: string | number;
  currentValue?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RadioImageForm = ({
  children,
  onStateChange,
  defaultValue,
}: React.PropsWithChildren<Props>): React.ReactElement => {
  const [state, setState] = React.useState<State>({
    currentValue: "",
    defaultValue,
  });

  // Memorized so that providerState isn't recreated on each render
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
      <form>
        {
          // So here we can take all children and make a copy of them that has those props.
          React.Children.map(
            children as React.ReactElement,
            (child: React.ReactElement) =>
              // Clone and return a new React element using element as the starting point.
              // The resulting element will have the original element’s props with the
              // new props merged in shallowly. New children will replace existing children.
              React.cloneElement(child, {
                ...providerState,
              })
          )
        }
      </form>
    </RadioImageFormWrapper>
  );
};

const RadioInput = ({
  currentValue,
  onChange,
  label,
  value,
  name,
  imgSrc,
  key,
}: RadioInputProps): React.ReactElement => (
  <label className="radio-button-group" key={key}>
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

RadioImageForm.RadioInput = RadioInput;

export default RadioImageForm;
