import { IAction, RootState, TStellarBurgerAppActions } from "../types";
import { Dispatch, MiddlewareAPI } from "redux";

export const socketMiddleware = () => {
  return (
    storeAPI: MiddlewareAPI<Dispatch<TStellarBurgerAppActions>, RootState>,
  ) => {
    let socket: WebSocket | null = null;
    let isSocketOpen = false;

    return (next: Dispatch) => (action: IAction) => {
      const { dispatch } = storeAPI;
      const { type, payload } = action;

      if (type === "WS_CONNECTION_START") {
        const { wsUrl } = payload;
        socket = new WebSocket(wsUrl);
        isSocketOpen = true;
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: "WS_CONNECTION_SUCCESS", payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: "WS_CONNECTION_ERROR", payload: event });
        };

        socket.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          dispatch({ type: "WS_GET_MESSAGE", payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: "WS_CONNECTION_CLOSED", payload: event });
          if (isSocketOpen) {
            // If the variable is still true, an error occurred
            // Attempt to reconnect...
          }
          isSocketOpen = false;
        };

        if (type === "WS_SEND_MESSAGE") {
          const message = payload;
          socket.send(JSON.stringify(message));
        }

        if (type === "WS_CONNECTION_CLOSED") {
          socket.close();
          isSocketOpen = false;
        }
      }

      next(action);
    };
  };
};
