import { useReducer } from "react";

type Request = (...args: any) => Promise<any>;

type State = {
  error: { [key: string]: any };
  result: { [key: string]: any };
  loading: { [key: string]: boolean };
};

enum ACTION_TYPES {
  START_REQUEST = "START_REQUEST",
  FINISH_REQUEST = "FINISH_REQUEST",
}

type ActionArg = {
  key: string;
  type: ACTION_TYPES;
  payload?: {
    error?: any;
    result?: any;
    loading?: boolean;
  };
};

const initialValues = {
  error: {} as State["error"],
  result: {} as State["result"],
  loading: {} as State["loading"],
};

export default function useRequest(): [State, (requestFn: Request, key: string, params: { [key: string | number]: any }) => Promise<void>] {
  function requestReducer(state: State, action: ActionArg): State {
    switch (action.type) {
      case "START_REQUEST":
        return {
          ...state,
          loading: { ...state.loading, [action.key]: true },
          result: { ...state.result, [action.key]: undefined },
          error: { ...state.error, [action.key]: undefined },
        };

      case "FINISH_REQUEST":
        return {
          ...state,
          loading: { ...state.loading, [action.key]: false },
          result: { ...state.result, [action.key]: action.payload?.result },
          error: { ...state.error, [action.key]: action.payload?.error },
        };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(requestReducer, initialValues);

  async function request(requestFn: Request, key: string, params: { [key: string | number]: any }) {
    try {
      dispatch({ type: ACTION_TYPES.START_REQUEST, key });

      const result = await requestFn({ ...params });

      dispatch({
        type: ACTION_TYPES.FINISH_REQUEST,
        key,
        payload: { result: result },
      });
    } catch (e: any) {
      dispatch({
        type: ACTION_TYPES.FINISH_REQUEST,
        key,
        payload: { error: e.response.data },
      });

      throw { ...e.response.data, status: e.toJSON().status };
    }
  }

  return [state, request];
}
