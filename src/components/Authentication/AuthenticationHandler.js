import React from "react";

const AuthenticationHandler = (authType, value) => {
  switch (authType) {
    case "username":
      if (value.length <= 8) {
        return false;
      } else {
        return true;
      }
    case "password":
      if (value.length <= 8) {
        return false;
      } else {
        return true;
      }
  }
};

export default AuthenticationHandler;
