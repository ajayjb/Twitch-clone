const signIn = (value) => {
  return { type: "SIGN_IN", payload: value };
};

const signOut = () => {
  return { type: "SIGN_OUT" };
};

export { signIn, signOut };
