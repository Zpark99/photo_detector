import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLoginbutton = () => {
  const clientId = "1035187795500-d74ckqm4f1vipiq9lgtvsmva7hms1mea.apps.googleusercontent.com"; //이거 추가로 설정
  return (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
          onSuccess={(res) => {
            console.log("good", res);
          }}
          onFailure={(err) => {
            console.log("error", err);
          }}
          />
        </GoogleOAuthProvider>
  );
};
export default GoogleLoginbutton;
