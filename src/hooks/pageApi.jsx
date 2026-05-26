import axios from "axios";

export const fetchPosts = async (page) => {

  try {

    const Api = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;

    const res = await axios.get(Api);

    return res.data;

  } catch (error) {

    throw new Error("Failed to Fetch Posts");
  }
};