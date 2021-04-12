import { useForm } from "react-hook-form";
import image1 from "../images/image1.svg";

export default function ContactEmail({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
    });
    setStep(2);
  }
  return (
    <>
      <img
        src={image1}
        className="absolute top-0 right-0 md:opacity-90 sm:opacity-0"
        alt="Decoration"
      ></img>
      <form onSubmit={handleSubmit(onSubmit)} className="px-10 ">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-2 uppercase font-bold text-lg text-grey-darkest font-sans"
          ></label>

          {errors.name && (
            <p className="text-pink-400">{errors.name.message}</p>
          )}
          <input
            ref={register({
              required: "You must specify your name",
              minLength: {
                message: "Your name should contain characters",
              },
            })}
            name="name"
            type="text"
            placeholder="Name"
            className="font-sans border py-2 px-3 text-grey-darkest rounded-lg shadow-sm"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="mb-2 uppercase font-bold text-lg text-grey-darkest"
          ></label>
          {errors.email && (
            <p className="text-pink-400 font-sans">{errors.email.message}</p>
          )}

          <input
            ref={register({
              required: "You must specify an email",
              minLength: {
                message: "Your email must contain @ , .com",
              },
            })}
            name="email"
            type="email"
            placeholder="Email"
            className="font-sans border py-2 px-3 text-grey-darkest rounded-lg shadow-sm"
          />
        </div>
        <div>
          <button
            type="Submit"
            className="font-sans inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}
