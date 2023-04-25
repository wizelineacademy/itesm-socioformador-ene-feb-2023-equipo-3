/* POST REQUEST EXAMPLE

POST  https://www.linkedin.com/oauth/v2/accessToken
 
Content-Type: application/x-www-form-urlencoded
grant_type = authorization_code
code = {authorization_code_from_step2_response}
client_id = 86wbcx15zgrlss
client_secret = 6UdsfqsavfiXvVlk
redirect_uri = http://localhost:3000/
*/

import { useState } from 'react';

type LinkedInLoginButtonProps = {
  text: string;
};

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ text }) => {
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
      // Configurar los parámetros de la solicitud GET para obtener la URL de autorización
    const params1 = new URLSearchParams({
      response_type: 'code',
      client_id: "86wbcx15zgrlss",
      redirect_uri: "http://localhost:3000/",
      state: 'DCEeFWf45A53sdfKef424',
      scope: 'r_emailaddress r_liteprofile',
    });

    // Construir la URL de autorización de LinkedIn
    const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?${params1.toString()}`;

    // Redireccionar al usuario a la página de autorización de LinkedIn
    window.location.href = authorizationUrl;
  };
  

  return (
    <>
      {accessToken ? (
        <div>
          <p>¡Has iniciado sesión en LinkedIn!</p>
          {/* mostrar los datos de LinkedIn aquí */}
        </div>
      ) : (
        <button onClick={handleLogin}>{text}</button>
      )}
    </>
  );
};

export default LinkedInLoginButton;
