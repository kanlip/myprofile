import axios from "axios";

export const FETCH_WORKS = "fetch_works";
export const CONTACT = "contact";
const ROOT_URL = "/";
const WORK_URL = "work/";

export function fetchWorks(type) {
  const request = axios.get(`${ROOT_URL}${WORK_URL}${type}`);
  return {
    type: FETCH_WORKS,
    payload: request
  };
}

export function contact(values) {
  const request = axios.post(`${ROOT_URL}contactme`, values);
  return {
    type: CONTACT,
    payload: request
  };
}
