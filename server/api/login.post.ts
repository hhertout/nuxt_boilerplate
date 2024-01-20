export default defineEventHandler(async event => {
  let res: Response;
  const credentials = await readBody(event);
  try {
    res = await fetch(`${process.env.BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: credentials,
    });
    if (res.ok) {
      const cookie = res.headers.getSetCookie()[0];
      appendResponseHeader(event, "set-cookie", cookie);
      setResponseStatus(event, 200)
      return event
    }
  } catch (err) {
    throw createError({statusCode: 500})
  }
  throw createError({statusCode: res.status})
});
