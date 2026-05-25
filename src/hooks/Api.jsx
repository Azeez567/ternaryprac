import axios from "axios";

const API = "https://6985ac756964f10bf2540df1.mockapi.io/user";

export const getUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};


export const addUser = async (user) => {
  const res = await axios.post(API, user);
  return res.data;
};

export const updateUser = async (user) => {
  const res = await axios.put(`${API}/${user.id}`, user);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};