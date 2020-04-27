import React from "react";
import "./sign-in-sign-up.styles.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";
const SignInSignUP = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUP;
