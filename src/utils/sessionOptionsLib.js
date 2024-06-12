// Configuration for the user session
export const sessionOptions = {
  password: process.env.NEXT_PUBLIC_SECRET_KEY,
  cookieName: "code-with-usama",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

// Initially the user will not be logged in
export const defaultSession = {
  isLoggedIn: false,
};
