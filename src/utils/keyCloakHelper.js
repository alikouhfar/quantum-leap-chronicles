import Keycloak from "keycloak-js";

const initOptions = {
  url: "http://localhost:8080",
  realm: "myrealm",
  clientId: "react-app",
};

const kc = new Keycloak(initOptions);

export function keyCloakLogin() {
  if (kc.authenticated) {
    console.info("Already authenticated");
    console.log("Keycloak", kc);
    console.log("Access Token", kc.token);

    kc.onTokenExpired = () => {
      console.log("Token expired");
    };
    return;
  }

  kc.init({
    onLoad: "login-required",
    checkLoginIframe: true,
    pkceMethod: "S256",
  }).then(
    (auth) => {
      if (auth) {
        console.info("Authenticated");
        console.log("auth", auth);
        console.log("Keycloak", kc);
        console.log("Access Token", kc.token);

        kc.onTokenExpired = () => {
          console.info("Token expired");
        };
      }
    },
    () => {
      console.error("Authentication Failed");
    },
  );
}

export function keyCloakLogout() {
  if (!kc.authenticated) {
    console.info("User is not authenticated. No need to log out.");
    return;
  }

  kc.logout()
    .then(() => {
      console.info("Successfully logged out of Keycloak");
    })
    .catch((error) => {
      console.error("Logout failed", error);
    });
}

export function keyCloakCheckState() {
  if (kc.authenticated) {
    console.log("Authenticated");
  } else {
    console.log("Not Authenticated");
  }
}
