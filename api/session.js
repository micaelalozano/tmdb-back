function getSession() {
  const sessionData = localStorage.getItem("session");
  if (sessionData) {
    const session = JSON.parse(sessionData);
    console.log(localStorage.getItem("session"));
    return session;
  }
  console.log(localStorage.getItem("session"));
}

module.exports = { getSession };
