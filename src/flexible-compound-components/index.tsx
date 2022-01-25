import { useState } from "react";

import DATA from "../data";
import RadioImageForm from "./components/radio-image-form";

function SubmitButton() {
  const onSubmit = (value: string): void => {
    alert(`Submitted: ${value}`);
  };

  return <RadioImageForm.SubmitButton onSubmit={onSubmit} />;
}

export const FlexibleCompoundComponents = () => {
  const [value, setValue] = useState<string | null>(null);

  const onChange = (value: string): void => {
    setValue(value);
  };

  return (
    <>
      <h1>Flexible Compound Components</h1>
      <div>
        <h1 className="my-5">Parent Value: {value}</h1>

        <RadioImageForm onStateChange={onChange}>
          <RadioImageForm.CurrentValue />
          <form>
            <div>
              {DATA.map(
                ({ label, value, imgSrc }): React.ReactElement => (
                  <RadioImageForm.RadioInput
                    label={label}
                    value={value}
                    name={label}
                    imgSrc={imgSrc}
                  />
                )
              )}
            </div>
          </form>
          <div className="d-flex justify-content-center">
            <div>
              <div>
                <SubmitButton />
              </div>
            </div>
          </div>
        </RadioImageForm>
      </div>
    </>
  );
};
