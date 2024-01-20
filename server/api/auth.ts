import {EventHandlerRequest, H3Event} from "h3";

export default defineEventHandler(async event => {
  const headers = extractCookieAndSetInHeader(event)
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/api/auth/check-cookie`,
      {
        method: "GET",
        headers,
        credentials: "include",
      }
    );
    if (res.ok) return { authorized: true };
    else return { authorized: false };
  } catch (err) {
    console.error(err);
    return { err };
  }
});

const extractCookieAndSetInHeader = (event:  H3Event<EventHandlerRequest>): Headers => {
  const headers = new Headers();
  const cookie = parseCookies(event)
  headers.set("cookie", `Authorization=${cookie['Authorization']}`);
  return headers
}