import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../redux/thunks/userThunks";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialFormData = {
    name: "",
    username: "",
    password: "",
    image: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const resetValues = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#image").value = "";

    setFormData({ ...initialFormData });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
    resetValues();
  };

  const isFilled =
    formData.name !== "" &&
    formData.username !== "" &&
    formData.password !== "" &&
    formData.image !== "";

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <h2>Register</h2>
        <div className="form-block">
          <label title="name" htmlFor="name">
            {"Name: "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="your name..."
          />
        </div>
        <div className="form-block">
          <label title="username" htmlFor="username">
            {"Username: "}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="your username..."
          />
        </div>
        <div className="form-block">
          <label title="password" htmlFor="password">
            {"Password: "}
          </label>
          <input
            placeholder="your password..."
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div className="form-block">
          <label title="image" htmlFor="image">
            {"Image: "}
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            placeholder="upload your photo..."
          />
        </div>
        <div className="form-block">
          <button type="submit" className="button" disabled={!isFilled}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
