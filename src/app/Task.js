import React, { useEffect, useState } from "react";
import axios from "axios";

const Task = () => {
  const baseUrl = "https://api.metiundo.de/v1";
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginResponse, setLoginResponse] = useState(null);
  const [meterList, setMeterList] = useState(null);
  const [meteringpoint, setMeteringpoint] = useState(null);

  // LOGIN FUNCTION
  const login = async () => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        email: "takehome@metiundo.io",
        password: "Vm91Y2hlckZvckltbWVkaWF0ZUhpcmUK",
      });
      console.log(response.data);
      setLoginResponse(response.data);
    } catch (error) {
      console.error("Login Error:", error.message);
      setLoginResponse(null);
      throw error;
    }
  };

  // GET METER LIST FUNCTION
  const getMeterList = async () => {
    try {
      if (!loginResponse || !loginResponse.tokens.accessToken) {
        await login();
      }

      const response = await axios.get(`${baseUrl}/meteringpoints`, {
        headers: {
          Authorization: `Bearer ${loginResponse.tokens.accessToken}`,
        },
      });

      console.log("Meter List Response:", response.data);
      setMeterList(response.data);
    } catch (error) {
      console.error("Meter List Error:", error.message);
      setMeterList(null);
    }
  };

  // GET Metering Point FUNCTION
  const getMeteringpoint = async (meterUuid) => {
    try {
      if (!loginResponse || !loginResponse.tokens.accessToken) {
        await login();
      }

      const response = await axios.get(
        `${baseUrl}/meteringpoints/${meterUuid}`,
        {
          headers: {
            Authorization: `Bearer ${loginResponse.tokens.accessToken}`,
          },
        }
      );

      console.log("Metering Point Response:", response.data);
      setMeteringpoint(response.data);
    } catch (error) {
      console.error("Metering Point Error:", error.message);
      setMeteringpoint(null);
    }
  };

  // CALL THE FUNCTIONS ON LOAD
  useEffect(() => {
    getMeterList();
  }, [loginResponse]);

  return (
    <div>
      <form>
        <label htmlFor="email">MY EMAIL</label>
        <input
          type="text"
          id="email"
          value={myEmail}
          onChange={(e) => {
            setMyEmail(e.target.value);
          }}
        />
        <label htmlFor="password">MY PASSWORD</label>
        <input
          type="text"
          id="password"
          value={myPassword}
          onChange={(e) => {
            setMyPassword(e.target.value);
          }}
        />
        <button>SUBMIT API</button>
      </form>
      {meterList && (
        <div>
          <h3>Meter List:</h3>
          <ul>
            {meterList.map((meter) => (
              <li key={meter.uuid}>
                {meter.uuid}{" "}
                <button onClick={() => getMeteringpoint(meter.uuid)}>
                  Get Metering Point
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {meteringpoint && (
        <div>
          <h3>Metering Point:</h3>
          <ul>
            {meteringpoint.map((reading) => (
              <li key={reading.readingTime}>
                {reading.readingTime}: {reading.energyOut} kWh
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Task;
