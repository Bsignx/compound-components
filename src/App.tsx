import React from "react";
// import { CompoundComponents } from "./compound-components";
import { FlexibleCompoundComponents } from "./flexible-compound-components";

// This app will help identify the trade-offs of the different React patterns
// and when each pattern would be most appropriate. The following patterns will allow
// for more useful and reusable code by adhering to design principles like separation
// of concern, DRY, and code reuse. Some of these patterns will help with problems that
//  arise in large React applications such as [prop drilling](https://kentcdodds.com/blog/prop-drilling)
// or managing state. Each major pattern includes an example hosted on [CodeSandBox](https://codesandbox.io/).

function App() {
  return (
    <>
      {/* <CompoundComponents /> */}
      <FlexibleCompoundComponents />
    </>
  );
}

export default App;
