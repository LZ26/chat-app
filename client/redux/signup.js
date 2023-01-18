import axios from 'axios';

export const signUp = (data) => async (dispatch) => {
  try {
    const res = await axios.post('/api/signup', data);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
