module.exports = async function cookieValidator(cookies) {
  try {
    await externallyValidateCookie(cookies.testCookie);
  } catch {
    throw new Error("Invalid cookies");
  }
};
// export default cookieValidator
// module.exports = cookieValidator;

