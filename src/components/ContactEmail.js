import { useForm } from "react-hook-form";

function ContactEmail({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
    });
    setStep(2);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="sr-only"></label>
          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <button
            type="Submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactEmail;
