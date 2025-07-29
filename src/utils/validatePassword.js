//validate:
// - At least 6 characters
//- 1 Uppercase
//- 1 Lowercase
// - 1 digit
//- special character !@#$%&^*()<>?{}|
//- password do not match

export const validator = (password = "", confirmPassword = "") => {
  const error = [];

  password.length < 6 && error.push("At least 6 characters required!");

  !/[A-Z]/.test(password) &&
    error.push("Password must contain at least one UPPERCASE LETTER"); //asdassa
  !/[a-z]/.test(password) &&
    error.push("Password must contain at least one lowercase letter"); //AFSDFSA
  !/[0-9]/.test(password) &&
    error.push("Password must contain at least one DIGIT"); //AFSDFSA
  !/[!@#$%&^*()<>?{}|]/.test(password) &&
    error.push(
      "Password must contain at least one special character !@#$%&^*()<>?{}|"
    ); //AFSDFSA
  password !== confirmPassword && error.push("Password must match");

  return error;
};
