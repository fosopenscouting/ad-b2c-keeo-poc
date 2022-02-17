// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "6f186fd0-df74-4e84-b243-8a4c95bf3127",
        authority: "https://fosopenscoutingvzwb2c.b2clogin.com/fosopenscoutingvzwb2c.onmicrosoft.com/B2C_1_SignIn_Signup",
        knownAuthorities: ["fosopenscoutingvzwb2c.b2clogin.com"],
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin
    }
};

// Scopes you add here will be prompted for consent during login
export const loginRequest = {
    scopes: ["openid profile email 6f186fd0-df74-4e84-b243-8a4c95bf3127"]
};
