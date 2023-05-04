/* POST REQUEST

POST  https://www.linkedin.com/oauth/v2/accessToken
 
Content-Type: application/x-www-form-urlencoded
grant_type = authorization_code
code = {authorization_code_from_step2_response}
client_id = 86wbcx15zgrlss
client_secret = 6UdsfqsavfiXvVlk
redirect_uri = http://localhost:3000/
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    background: '#0077B5',
    color: '#ffffff',
    '&:hover': {
      background: '#333333',
    },
  },
});

interface LinkedInData {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  refresh_token_expires_in: number,
  scope: string
}

interface ProfileData {
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture: string;
}

type LinkedInLoginButtonProps = {
  text: string;
};

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ text }) => {
  const classes = useStyles();
  let accessToken: string | null = null;
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [jsonData, setJsonData] = useState<LinkedInData | null>(null);
  let authorizationUrl2: string;

  const handleLogin = async () => {
    // ---------- pt. 1
    const params1 = new URLSearchParams({
      response_type: 'code',
      client_id: "86wbcx15zgrlss",
      redirect_uri: "http://localhost:3000/",
      state: 'DCEeFWf45A53sdfKef424', // random string para seguridad
      scope: 'r_emailaddress r_liteprofile',
    });
    const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?${params1.toString()}`;

    // ------------- pt. 2
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("code")) {
      // Ya se ha hecho la autentificación del usuario:
      accessToken = searchParams.get("code");
      console.log("Ya se ha iniciado sesión: ", accessToken);

      getAccessToken(String(accessToken));
    }
    else {
      window.location.href = authorizationUrl;
    }
  };
  
  async function getAccessToken(code: string) {
    
    const params2 = new URLSearchParams({
      code: code,
      grant_type: 'authorization_code',
      client_id: '86wbcx15zgrlss',
      client_secret: '6UdsfqsavfiXvVlk',
      redirect_uri: 'http://localhost:3000/',
    });
  
    authorizationUrl2 = `http://localhost:5000/https://www.linkedin.com/oauth/v2/accessToken?${params2.toString()}`;
    fetchData();
    getLinkedInData();
    return 0;
  }

  const fetchData = () => {
    fetch(authorizationUrl2)
      .then(response => response.json())
      .then(data => {
        // Almacenamos los datos en el estado del componente
        setJsonData(data);
        console.log("Access Token: ", data.access_token);
      })
      .catch(error => console.error(error));
  };

  // Usamos useEffect dentro de la función fetchData
  useEffect(() => {
    fetchData();
  }, []);
 
  // -------- pt.3
  const API_BASE_URL = 'https://api.linkedin.com/v2/me';

  const getLinkedInData = async () => {
    if (jsonData?.access_token){
      const response = await axios.get(`http://localhost:5000/${API_BASE_URL}`, {
      headers: {
        'Authorization': `Bearer ${jsonData.access_token}`,
        'Content-Type': 'application/json',
        'x-li-format': 'json'
      }
    });
    console.log(response.data);
    return response.data;
    }
    return 0;
  };

  useEffect(() => {
    getLinkedInData();
  }, [jsonData?.access_token]);

  return (
    <div>
      <Button 
        variant = "contained" 
        className={classes.root}
        style={{ textTransform: 'none', borderRadius: '50px' }}
        endIcon=
          {<Avatar style={{ background: 'transparent' }}>
            <LinkedInIcon style={{ color: 'white', fontSize: 25 }} />
          </Avatar>} 
        onClick = {handleLogin}>
        {text}
      </Button>
    </div>
  );
};

export default LinkedInLoginButton;
