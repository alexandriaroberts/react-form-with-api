import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import image3 from "../images/image3.svg";

function Address({ setStep, formValues, setFormValues }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({ country: undefined });
  const { register, handleSubmit } = useForm();

  // Fetch Data From Api
  useEffect(() => {
    const fetchData = () => {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((result) => setData(result))
        .catch((err) => console.log("error"));
    };
    fetchData();
  }, []);

  const options = data.map((d) => ({
    label: d.name,
    value: d.name,
  }));

  function handleChange(item) {
    setSearch(item);
  }

  function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
      ...search,
    });
    setStep(4);
    console.log({ ...formValues, ...values, ...search });
  }

  // styles for the select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #dede",
      color: state.isSelected ? "#53e3a6" : "green",
      backgroundColor: "white",
      padding: 10,
    }),
    control: (base, state) => ({
      ...base,
      color: state.isSelected ? "#53e3a6" : "green",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      boxShadow: "none",
      margin: 20,
      "&:hover": {
        border: "1px solid rgba(255, 255, 255, 0.4)",
      },
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "1em",
      color: "rgba(59, 130, 246, 0.5)",
      fontWeight: 200,
    }),
  };

  return (
    <>
      <img
        src={image3}
        className="absolute top-0 right-0 md:opacity-90 sm:opacity-0"
        alt="Decoration"
      ></img>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 animate-fade-in-down"
      >
        <p className="py-2 font-sans">Search Your Country....</p>
        <Select
          type="text"
          defaultValue={""}
          placeholder={"Search Country...."}
          value={search.country}
          onChange={handleChange}
          name="Search"
          ref={register}
          options={options}
          styles={customStyles}
          className="font-sans block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        />

        <div>
          <button
            type="Submit"
            className="font-sans inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Address;
