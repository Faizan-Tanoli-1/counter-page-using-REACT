import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitting the form", data);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-card">
        <h1>Practice Form</h1>

        <div className="form-group">
          <label> First Name: </label>
          <input
            className={errors.firstName ? "input_error" : ""}
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 4, message: "Minimum length is 4" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })}
          />
          {errors.firstName && (
            <p className="error_msg">{errors.firstName.message}</p>
          )}
        </div>
        
        <br />

        <div className="form-group">
          <label> Middle Name: </label>
          <input
            className={errors.middleName ? "input_error" : ""}
            {...register("middleName", {
              required: "Middle name is required",
              minLength: { value: 4, message: "Minimum length is 4" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })}
          />
          {errors.middleName && (
            <p className="error_msg">{errors.middleName.message}</p>
          )}
        </div>
          
        <br />

        <div className="form-group">
          <label> Last Name: </label>
          <input
            className={errors.lastName ? "input_error" : ""}
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 4, message: "Minimum length is 4" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })}
          />
          {errors.lastName && (
            <p className="error_msg">{errors.lastName.message}</p>
          )}
        </div>

        <br />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
