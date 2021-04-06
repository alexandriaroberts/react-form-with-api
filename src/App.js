import { useState } from "react";

import ContactEmail from "./components/ContactEmail";
import Address from "./components/Address";

function App() {
  // const { register, handleSubmit, errors } = useForm();

  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Two Step Form</h1>

        {step === 1 && (
          <ContactEmail
            setStep={setStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        )}

        {step === 2 && (
          <Address
            setStep={setStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        )}
      </div>
    </div>
  );
}

export default App;
