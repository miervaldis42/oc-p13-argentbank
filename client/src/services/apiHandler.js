const APIURL = "http://localhost:3001/api/v1";
let options = null;

// Backbone Fetch API Call
async function fetchApiCall(url, userCredentials) {
  switch (url) {
    case "/user/login":
      options = loginOptions(userCredentials);
      break;

    default:
      break;
  }

  const res = await fetch(`${APIURL}${url}`, options);
  const data = !res.ok ? Number(res.status) : await res.json();

  return data;
}

// API Call - User Login
const loginOptions = (userCredentials) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  };
};

export default fetchApiCall;
