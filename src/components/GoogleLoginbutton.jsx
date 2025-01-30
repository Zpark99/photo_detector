import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLoginbutton = () => {
  const clientId = "YOUR_GOOGLE_CLIENT_ID"; //이거 추가로 설정
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
