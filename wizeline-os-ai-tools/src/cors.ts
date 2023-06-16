import axios from "axios";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const getAccessToken = (code: string): Promise<string> => {
  const url = `${CORS_PROXY}https://www.linkedin.com/oauth/v2/accessToken`;
  const data = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:3000",
    client_id: "86wbcx15zgrlss",
    client_secret: "6UdsfqsavfiXvVlk",
  };

  return axios.post(url, data).then((response) => response.data.access_token);
};

const getUserProfile = (accessToken: string): Promise<any> => {
  const url = `${CORS_PROXY}https://api.linkedin.com/v2/me`;

  return axios
    .get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((response) => response.data);
};

export { getAccessToken, getUserProfile };
