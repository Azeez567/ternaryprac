


import axios from "axios";

const CONTACT_API =
  "https://6985ac756964f10bf2540df1.mockapi.io/contactUsers";

export const addContactUser =
  async (user) => {

    const res = await axios.post(CONTACT_API,
      user
    );

    return res.data;

  };

  export const getUsers = async () => {
  const res = await axios.get(CONTACT_API);
  return res.data;
};

export const updateUser = async (user) => {
  const res = await axios.put(`${CONTACT_API}/${user.id}`, user);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${CONTACT_API}/${id}`);
  return res.data;
};