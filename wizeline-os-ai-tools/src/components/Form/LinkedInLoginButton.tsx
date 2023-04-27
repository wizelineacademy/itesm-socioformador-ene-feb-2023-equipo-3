/* POST REQUEST EXAMPLE

POST  https://www.linkedin.com/oauth/v2/accessToken
 
Content-Type: application/x-www-form-urlencoded
grant_type = authorization_code
code = {authorization_code_from_step2_response}
client_id = 86wbcx15zgrlss
client_secret = 6UdsfqsavfiXvVlk
redirect_uri = http://localhost:3000/
*/

type LinkedInLoginButtonProps = {
  text: string;
};

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ text }) => {
  let accessToken: string | null = null;

  const handleLogin = async () => {

    const params1 = new URLSearchParams({
      response_type: 'code',
      client_id: "86wbcx15zgrlss",
      redirect_uri: "http://localhost:3000/",
      state: 'DCEeFWf45A53sdfKef424', // random string para seguridad
      scope: 'r_emailaddress r_liteprofile',
    });
    const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?${params1.toString()}`;

    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      // Verificar si el parámetro "code" está presente en la URL
      if (searchParams.has("code")) {
        // Leer el valor del parámetro "code"
        // Credenciales para acceder al perfil del usuario
        accessToken = searchParams.get("code");
        console.log(accessToken);
        //getProfile();
      } 
      else {
        window.location.href = authorizationUrl;
      }
    }
  };

  const getProfile = async () => {
    try {
      const response = await fetch("https://api.linkedin.com/v2/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      console.log(data); // información del perfil del usuario
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>{text}</button>
    </div>
  );
};

export default LinkedInLoginButton;
