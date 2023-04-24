import axios from "axios";
const apiEndpoint = "https://www.omdbapi.com/?i=tt3896198&apikey=91c05eb9&";

export const fetchMovie = async (title) => {
  const url = apiEndpoint + "t=" + title;

  const { data } = await axios.get(url);
  return data;
};
