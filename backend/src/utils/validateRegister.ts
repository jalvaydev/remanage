import { RegistrationInput } from "src/resolvers/RegistrationInput";
import { validateEmail } from "./validateEmail";

export const validateRegister = (options: RegistrationInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "length must be at least length 2",
      },
    ];
  }
  if (options.username.match("/^([a-z0-9]|[-._](?![-._])){4,20}$/")) {
    return [
      {
        field: "username",
        message:
          "username may only use letters, numbers, and the symbols - and _.",
      },
    ];
  }
  if (options.password.length <= 2) {
    return [
      {
        field: "password",
        message: "length must be at least length 2",
      },
    ];
  }
  if (!validateEmail(options.email)) {
    return [
      {
        field: "email",
        message: "you have entered an invalid email",
      },
    ];
  }
  if (
    !(
      options.accountType === "tenant" ||
      options.accountType === "manager" ||
      options.accountType === "admin"
    )
  )
    return [
      {
        field: "account type",
        message: "invalid account type",
      },
    ];
  return null;
};
