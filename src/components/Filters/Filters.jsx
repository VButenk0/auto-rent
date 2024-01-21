import React from "react";

const Filters = () => {
  return (
    <form>
      <label htmlFor="brand">
        <select name="brand" id="brand" />
      </label>
      <label htmlFor="price">
        <select name="price" id="price" />
      </label>
      <label htmlFor="mileage">
        <select name="mileage" id="mileage" />
      </label>
      <button>Search</button>
    </form>
  );
};

export default Filters;
