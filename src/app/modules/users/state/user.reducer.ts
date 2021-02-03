


import { User } from '../../../models/user.model';
import { userActions, userActionTypes } from './user.action';

export interface userState {
  data: User[];
  selected: User;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: userState = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: userActions): userState {

  switch (action.type) {

    case userActionTypes.LOAD_USER:

      return {
        ...state,
        action: userActionTypes.LOAD_USER,
        done: false,
        selected: null,
        error: null
      };

    case userActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case userActionTypes.LOAD_USER_FAIL:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };



    case userActionTypes.GET_USER:
      return {
        ...state,
        action: userActionTypes.GET_USER,
        done: false,
        selected: null,
        error: null
      };
    case userActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        done: true,
        error: null
      };
    case userActionTypes.GET_USER_FAIL:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };





    case userActionTypes.ADD_USER_ACTION:
      return {
        ...state,
        selected: action.payload,
        action: userActionTypes.ADD_USER_ACTION,
        done: false,
        error: null
      };
    case userActionTypes.ADD_USER_SUCCESS:
      {
        const newUser = {
          ...state.selected,
          id: action.payload
        };
        const data = [
          ...state.data,
          newUser
        ];

        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    case userActionTypes.ADD_USER_FAIL:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };



    case userActionTypes.UPDATE_USER_ACTION:
      return {
        ...state,
        selected: action.payload,
        action: userActionTypes.UPDATE_USER_ACTION,
        done: false,
        error: null
      };
    case userActionTypes.UPDATE_USER_SUCCESS:
      {
        const index = state
          .data
          .findIndex(data => data.id === state.selected.id);
        if (index >= 0) {
          const data = [
            ...state.data.slice(0, index),
            state.selected,
            ...state.data.slice(index + 1)
          ];
          return {
            ...state,
            data,
            done: true,
            selected: null,
            error: null
          };
        }
        return state;
      }
    case userActionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };


    case userActionTypes.DELETE_USER_ACTION:
      {
        const selected = state.data.find(data => data.id === action.payload);
        return {
          ...state,
          selected,
          action: userActionTypes.DELETE_USER_ACTION,
          done: false,
          error: null
        };
      }
    case userActionTypes.DELETE_USER_SUCCESS:
      {
        const data = state.data.filter(data => data.id !== state.selected.id);
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    case userActionTypes.DELETE_USER_FAIL:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
    default: return {
      ...state
    }
  }
}


