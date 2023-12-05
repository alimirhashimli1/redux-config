import React, { useEffect, useState } from "react";
import axios from "axios";

const Task = () => {
  const baseUrl = "https://api.metiundo.de/v1";
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginResponse, setLoginResponse] = useState(null);
  const [meterList, setMeterList] = useState(null);
  const [readings, setReadings] = useState(null);

  // LOGIN FUNCTION
  const login = async () => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        email: "takehome@metiundo.io",
        password: "Vm91Y2hlckZvckltbWVkaWF0ZUhpcmUK",
      });
      console.log(response.data.tokens.accessToken);
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
        // If the login hasn't been performed or the access token is not available, perform login
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

  // GET READINGS FUNCTION
  const getReadings = async (meterUuid) => {
    try {
      if (!loginResponse || !loginResponse.tokens.accessToken) {
        // If the login hasn't been performed or the access token is not available, perform login
        await login();
      }

      const response = await axios.get(
        `${baseUrl}/meteringpoints/${meterUuid}/readings?from=${meterList.firstReading.readingTime}&to=${meterList.lastReading.readingTime}`,
        {
          headers: {
            Authorization: `Bearer ${loginResponse.tokens.accessToken}`,
          },
        }
      );

      console.log("Readings Response:", response.data);
      setReadings(response.data);
    } catch (error) {
      console.error("Readings Error:", error.message);
      setReadings(null);
    }
  };

  // CALL THE FUNCTIONS ON LOAD
  useEffect(() => {
    getMeterList();
  }, [loginResponse]); // Make sure to trigger the function when loginResponse changes

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
                <button onClick={() => getReadings(meter.uuid)}>
                  Get Readings
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {readings && (
        <div>
          <h3>Readings:</h3>
          <ul>
            {readings.map((reading) => (
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
