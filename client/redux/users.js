import axios from 'axios';

const SET_USERS = 'SET_USERS';

const CREATE_USER = 'CREATE_USER';

const DELETE_USER = 'DELETE_USER';

const UPDATE_USER = 'UPDATE_USER';

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    projects,
  };
};

export const _createUser = (user) => {
  return {
    type: CREATE_USER,
  };
};

export const _deleteUser = (user) => {
  return {
    type: DELETE_USER,
  };
};

export const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
  };
};

export const fetchUsers = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get('/api/projects');
      dispatch(setProjects(data));
    };
  } catch (err) {
    console.error('There is an error fetching all users');
  }
};

export const createUser = (user, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/users/', user);
      dispatch(_createUser(data));
      history.push('/users');
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUser = (user, history) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/users/${user.id}`);
      dispatch(_deleteUser(user));
      history.push('/users');
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUser = (user, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/user/${user.id}/edituser`,
        project
      );

      dispatch(_updateUser(data));
      history.push(`/users/${user.id}`);
    } catch (err) {
      console.log(err);
    }
  };
};

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case CREATE_USER:
      return [...state, action.user];
    case DELETE_USER:
      return state.filter((project) => user.id !== action.user.id);
    case UPDATE_USER:
      return state.map((project) =>
        project.id === action.user.id ? action.user : user
      );
    default:
      return state;
  }
}
