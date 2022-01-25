import { useState } from "react";

import RadioImageForm from "./components/radio-image-form";
import DATA from "../data";

export const CompoundComponents = () => {
  const [value, setValue] = useState<string | null>(null);

  const handleOnChange = (value: string): void => {
    setValue(value);
  };

  return (
    <>
      <h1>Compound Components</h1>
      <div>
        <h2 className="my-5">Parent Value: {value}</h2>

        <RadioImageForm onStateChange={handleOnChange}>
          {DATA.map(
            ({ label, value, imgSrc }): React.ReactElement => (
              <RadioImageForm.RadioInput
                label={label}
                value={value}
                name={label}
                imgSrc={imgSrc}
                key={imgSrc}
              />
            )
          )}
        </RadioImageForm>
      </div>
    </>
  );
};
