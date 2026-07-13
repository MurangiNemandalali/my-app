import { useFormik } from "formik";
import { object, string, number, date } from "yup";

const loginSchema = object({
  username: string()
    .required("username is missing 🫨")
    .min(4, "username is too short 😅"),
  password: string().required().min(8).max(12),
});

export function BasicForm() {
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        username: "", // 1
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (data) => {
        console.log(data);
      },
    });

  // No refresh & Collect data
  return (
    <form onSubmit={handleSubmit} className="basic-form">
      <label>
        Username:
        <input
          value={values.username} // 2
          onChange={handleChange}
          onBlur={handleBlur}
          name="username" // 3
          type="text"
          placeholder="John"
        />
      </label>
      {touched.username && errors.username ? errors.username : null}
      <label>
        Password:
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="text"
          placeholder="password"
        />
      </label>
      {touched.password && errors.password ? errors.password : null}
      <button type="submit">Login</button>
    </form>
  );
}

export function BasicForm1() {
  const formik = useFormik({
    initialValues: {
      username: "", // 1
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  // No refresh & Collect data
  return (
    <form onSubmit={formik.handleSubmit} className="basic-form">
      <label>
        Username:
        <input
          value={formik.values.username} // 2
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="username" // 3
          type="text"
          placeholder="John"
        />
      </label>
      {formik.touched.username && formik.errors.username
        ? formik.errors.username
        : null}
      <label>
        Password:
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          type="text"
          placeholder="password"
        />
      </label>
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : null}
      <button type="submit">Login</button>
    </form>
  );
}

// {
//   username: 'sara',
//   password: 'abc'
// }

//  <TextField
//         variant="outlined"
//         onChange={(event) => setName(event.target.value)}
//         value={name}
//         label="Name"
//       />
