import React from "react";
import { useFormik } from 'formik';
function App() {

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="type your email..."
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;