import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let result = {};
  errorMsg && ((result = errorMsg), console.log(result));
  location &&
    (result = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

  return [result];
};
