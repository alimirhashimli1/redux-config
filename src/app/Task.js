import React, { useEffect } from "react";
import axios from "axios";

const Task = () => {
  const baseUrl = "https://api.metiundo.de/v1";

  const login = async () => {
    try {
      const email = "takehome@metiundo.io";
      const password = "Vm91Y2hlckZvckltbWVkaWF0ZUhpcmUK";

      const credentials = `${email}:${password}`;
      const credentialsBase64 = btoa(credentials);

      const response = await axios.post(
        `https://api.metiundo.de/v1/auth/login`,
        {},
        {
          headers: {
            Authorization: `Basic ${credentialsBase64}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login Response:", response.data);

      // Do something with the response if needed
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <div>
      <p>Check the console for login response.</p>
    </div>
  );
};

export default Task;
