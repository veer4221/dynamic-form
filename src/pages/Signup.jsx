import React, { useEffect } from "react";
import DynamicForm from "../components/DynamicForm";
import { signupFormJSON } from "../forms/SignupForm";

const Signup = () => {
  useEffect(() => {
    console.log("signupFormJSON", signupFormJSON);
  }, []);
  return (
    <div className="">
      <DynamicForm formData={signupFormJSON} />
    </div>
  );
};

export default Signup;
