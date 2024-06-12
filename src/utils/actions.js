"use server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions } from "./sessionOptionsLib";

//this server action gets session with an async request & next headers and then stores it in cookies with next headers
export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);

  //if session not available access default session means user is not logged in and hide sensitive data
  if (!session.isLoggedIn) {
    session.isLoggedIn.defaultSession.isLoggedIn;
  }

  //then simply return the session
  return session;
};
