import {API_KEY, URL_ADDRESS} from "./consts";
import {buildQueryString} from "./buildQueryString"

export const fetchFromAPI = async ({path, parameters}) => {
  const defaultParameters = {
    api_key: API_KEY,
  };

  const allParameters = {
    ...defaultParameters,
    ...(parameters || {}),
  };

  const response = await fetch(`${URL_ADDRESS}${path}?${buildQueryString(allParameters)}`);

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json();
};