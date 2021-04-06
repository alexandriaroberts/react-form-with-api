import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

function Address({ formValues, setFormValues }) {
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
      color: "#53e3a6",
      fontWeight: 200,
    }),
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="search">
        <p>Search Country....</p>
        <Select
          type="text"
          defaultValue={""}
          placeholder={"Search Country...."}
          value={search.country}
          onChange={handleChange}
          name="Search"
          {...register("text")}
          options={options}
          styles={customStyles}
        />

        <div>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Address;
