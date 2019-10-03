import axios from "axios";
// import { client_id } from "../../secret";

//initial state
const initialState = {
  user_id: null,
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  favorite_color: "",
  stream_title: "",
  twitch_username: ""
};

//const strings
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_STREAM_TITLE = "UPDATE_STREAM_TITLE";
const ADD_TWITCH_USERNAME = "ADD_TWITCH_USERNAME";
const UPDATE_TWITCH_USERNAME = "UPDATE_TWITCH_USERNAME";
const UPDATE_FAVORITE_COLOR = "UPDATE_FAVORITE_COLOR";
const DELETE_ACCOUNT = "DELETE_ACCOUNT";

//functions
export function getSession(username) {
  return {
    type: GET_SESSION,
    payload: axios.get(`/auth/user?username=${username}`)
  };
}

export function registerUser(newUser) {
  console.log(newUser);
  return {
    type: REGISTER_USER,
    payload: axios.post("/auth/register", newUser)
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", user)
  };
}

export function logoutUser() {
  axios.post("/auth/logout");
  return {
    type: LOGOUT_USER
  };
}

export function updateUsername(user) {
  return {
    type: UPDATE_USERNAME,
    payload: axios.put("/auth/settings/user", user)
  };
}

export function updateStreamTitle(title) {
  return {
    type: UPDATE_STREAM_TITLE,
    payload: axios.put("/auth/settings/streamtitle", title)
  };
}

export function addTwitchUsername(twitch) {
  const userInfo = () => {
    axios.post("/auth/settings/twitch", twitch);
    // axios.get(`https://api.twitch.tv/helix/users?login=${twitch}`, {
    //   headers: {
    //     Client_ID: client_id
    //   }
    // });
  };
  return {
    type: ADD_TWITCH_USERNAME,
    payload: userInfo()
  };
}

export function updateTwitchUsername(twitch) {
  return {
    type: UPDATE_TWITCH_USERNAME,
    payload: axios.put("/auth/settings/twitch", twitch)
  };
}

export function updateFavoriteColor(color) {
  return {
    type: UPDATE_FAVORITE_COLOR,
    payload: axios.put("/auth/settings/color", color)
  };
}

export function deleteAccount() {
  console.log("hit");
  return {
    type: DELETE_ACCOUNT,
    payload: axios.delete("/auth/settings/user")
  };
}

//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        email: payload.data.email,
        favorite_color: payload.data.favorite_color,
        stream_title: payload.data.stream_title,
        twitch_username: payload.data.twitch_username
      };
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        email: payload.data.email,
        favorite_color: payload.data.favorite_color,
        stream_title: payload.data.stream_title,
        twitch_username: payload.data.twitch_username
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        email: payload.data.email,
        favorite_color: payload.data.favorite_color,
        stream_title: payload.data.stream_title,
        twitch_username: payload.data.twitch_username
      };
    case LOGOUT_USER:
      return {
        user_id: null,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        favorite_color: "",
        stream_title: "",
        twitch_username: ""
      };
    case `${UPDATE_USERNAME}_FULFILLED`:
      return {
        ...state,
        username: payload.data.username
      };
    case `${UPDATE_STREAM_TITLE}_FULFILLED`:
      return {
        ...state,
        stream_title: payload.data.stream_title
      };
    case `${ADD_TWITCH_USERNAME}_FULFILLED`:
      return {
        ...state,
        twitch_username: payload.data.twitch_username
      };
    case `${UPDATE_TWITCH_USERNAME}_FULFILLED`:
      return {
        ...state,
        twitch_username: payload.data.twitch_username
      };
    case `${UPDATE_FAVORITE_COLOR}_FULFILLED`:
      return {
        ...state,
        favorite_color: payload.data.favorite_color
      };
    case `${DELETE_ACCOUNT}_FULFILLED`:
      console.log("hit");
      return {
        ...state,
        user_id: null,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        favorite_color: "",
        stream_title: "",
        twitch_username: ""
      };
    default:
      return state;
  }
}
