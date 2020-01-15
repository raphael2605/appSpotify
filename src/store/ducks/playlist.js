export const Types = {
  GET_REQUEST: 'playlist/GET_REQUEST',
  GET_SUCCESS: 'playlist/GET_SUCCESS',
}

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_REQUEST:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}
