import { useForm } from "react-hook-form";
import image4 from "../images/image4.svg";

export default function ThankYou({ setStep, formValues, setFormValues }) {
  const { handleSubmit } = useForm();

  function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
    });
    setStep(4);
  }
  return (
    <>
      <div onSubmit={handleSubmit(onSubmit)}>
        <p className="text-xl text-indigo-400 font-sans">
          Thank you for your info, we will contact you soon!
        </p>
        <img
          src={image4}
          className="absolute top-12 right-0 md:opacity-90 sm:opacity-0"
          alt="Decoration"
        ></img>
      </div>
    </>
  );
}
