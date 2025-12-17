import { useState } from "react"

export function DataBinding() {
  // const [value] = useState(4500000);
  // const [age] = useState("aa");
  const [validationClass] = useState("text-success");
  return (
    <div className="container-fluid">
      <h1 className="text-primary">Data Binding in React</h1>
      {/* <h2>Value = {value}</h2> */}
      {/* <h2>Value = {value.toFixed(2)}</h2> */}
      {/* <h2>Value = {value.toLocaleString()}</h2> */}
      {/* <h2>Value = {value.toLocaleString("en-IN")}</h2> */}
      {/* <h2>Value = {value.toLocaleString("hi-IN", { style: 'currency', currency: 'INR' })}</h2> */}
      {/* <p>
        {
          (isNaN(age)) ? "Age is not a number" : age
        }
      </p> */}
      <h2 className={`border border-2 text-center mt-2 p-2 ${validationClass}`}>Data Binding</h2>
    </div>
  )
}
