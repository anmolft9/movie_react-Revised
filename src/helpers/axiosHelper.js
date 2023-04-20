import axios from "axios";

export const fetchMovieInfo = async (title) => {
  const url =
    "https://www.omdbapi.com/?i=tt3896198&apikey=91c05eb9&" + "t=" + title;

  const { data } = await axios.get(url);
  return data;
  //   console.log(data);
};
