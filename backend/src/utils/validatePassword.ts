export const validatePassword = (password: string) => {
  if (password.length <= 2) {
    return [
      {
        field: "password",
        message: "length must be at least length 2",
      },
    ];
  }

  return null;
};
