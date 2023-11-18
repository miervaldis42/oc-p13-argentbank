const APIURL = "http://localhost:3001/api/v1";
let options = null;

// Backbone Fetch API Call
async function fetchApiCall(actionType, url, obj) {
  switch (actionType) {
    case "login":
      options = loginOptions(obj);
      break;

    case "getUserInfo":
      options = profileGetOptions(obj);
      break;

    case "modifyUserInfo":
      options = profileUpdateOptions(obj);
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

// API Call - get User Profile
const profileGetOptions = (userCredentials) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userCredentials}`,
    },
  };
};

// API Call - Update User Profile
const profileUpdateOptions = (data) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.userCredentials}`,
    },
    body: JSON.stringify(data.newUserInfo),
  };
};

export default fetchApiCall;
