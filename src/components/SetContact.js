import { useForm } from "react-hook-form";

export default function ContactEmail({ setStep, formValues, setFormValues }) {
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
      <form onSubmit={handleSubmit(onSubmit)} className="px-10">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-2 uppercase font-bold text-lg text-grey-darkest"
          ></label>
          <input
            ref={register}
            name="name"
            type="text"
            placeholder="Name"
            className="border py-2 px-3 text-grey-darkest rounded-lg shadow-sm"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="mb-2 uppercase font-bold text-lg text-grey-darkest"
          ></label>
          <input
            ref={register}
            name="email"
            type="email"
            placeholder="Email"
            className="border py-2 px-3 text-grey-darkest rounded-lg shadow-sm"
          />
        </div>
        <div>
          <button
            type="Submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}
