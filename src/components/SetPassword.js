import { useForm } from "react-hook-form";
import image2 from "../images/image2.svg";

export default function SetPassword({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
    });
    setStep(3);
  }
  return (
    <>
      <img
        src={image2}
        className="absolute -top-5 right-0 z-0 md:opacity-90 sm:opacity-0"
        alt="Decoration"
      ></img>
      <form onSubmit={handleSubmit(onSubmit)} className="px-10 z-50">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="password"
            className="font-sans mb-2 uppercase font-bold text-lg text-grey-darkest"
          ></label>

          {errors.password && (
            <p className="text-pink-400 font-sans">{errors.password.message}</p>
          )}

          <input
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            name="password"
            type="password"
            placeholder="Password"
            className="font-sans border py-2 px-3 text-grey-darkest rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="repeat password"
            className="font-sans mb-2 uppercase font-bold text-lg text-grey-darkest"
          ></label>

          {errors.password && (
            <p className="text-pink-400">{errors.password.message}</p>
          )}

          <input
            ref={register({
              required: "You must repeat your password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            name="password"
            type="password"
            placeholder="Repeat Password"
            className="border py-2 px-3 text-grey-darkest rounded-lg shadow-sm"
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
