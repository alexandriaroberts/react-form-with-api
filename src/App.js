import { useState } from "react";

import Contact from "./components/SetContact";
import SetAddress from "./components/SetAddress";
import SetPassword from "./components/SetPassword";

function App() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  return (
    <div className="content-center h-screen w-screen bg-indigo-400 overflow-hidden">
      <div className="m-20  content-center">
        <h1 className="text-4xl font-bold text-center text-white px-8 py-20">
          Two Step Form
        </h1>
        <div className="bg-white rounded px-5 py-20 content-center">
          {step === 1 && (
            <Contact
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
              className="p-20"
            />
          )}

          {step === 2 && (
            <SetPassword
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

          {step === 3 && (
            <SetAddress
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
