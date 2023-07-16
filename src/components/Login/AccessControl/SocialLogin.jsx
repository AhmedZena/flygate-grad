import React from "react";
import classes from "../Login.module.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import TwitterLogin from "react-twitter-login";

function responseGoogle(response) {
  //   console.log(response);
}

function responseFacebook(response) {
  //   console.log(response);
}

function SocialLogin() {
  return (
    <div className={classes.socialLogin}>
      <div className={classes.ORLINE}>
        <span>OR</span>
      </div>

      <GoogleLogin
        clientId="609967223518-3tov2n8pb40levbns36dq4bh4rnlsecq.apps.googleusercontent.com"
        // buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className={classes.btnGoogle}
      />

      <br />
      <FacebookLogin
        appId="1088597931155576"
        callback={responseFacebook}
        cssClass={classes.btnFacebook}
        icon="fa-facebook"
        buttonTheme="dark"
        buttonStyle={{
          width: "200px",
          borderRadius: "20px",
          //   on hover
          ":hover": { backgroundColor: "red" },
        }}
      />
      <br />
      <TwitterLogin
        // authCallback={responseFacebook}
        consumerKey="your consumer key"
        consumerSecret="your consumer secret"
        className={classes.btnTwitter}
        buttonTheme="dark"
      />
    </div>
  );
}

export default SocialLogin;
