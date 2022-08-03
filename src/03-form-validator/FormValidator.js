import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(null);

  const hasExactlyOne = (formValue, charachter) => {
    return [...formValue].filter((char) => char === charachter).length === 1;
  };

  const validateForm = (e) => {
    e.preventDefault();
    let error;

    if (!email || !password || !passwordConfirm) {
      error = "All fields must be filled out";
    }

    if (email && !hasExactlyOne(email, "@")) {
      error = "The email must containt one @ character";
      console.log(hasExactlyOne(email, "@"));
    }

    if (password && password.length < 8) {
      error = "The password must be at least eight characters ling";
    }

    if (passwordConfirm && password && password !== passwordConfirm) {
      error = "The password and the password confirmation ust be the same";
    }

    setError(error || "User created!");
  };

  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <p>{error}</p>
      <input
        type="submit"
        value="Submit"
        onClick={(event) => validateForm(event)}
      />
    </form>
  );
}
