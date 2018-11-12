import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

export default function configureStore() {
  const logger = createLogger({ collapsed: true });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[thunk, logger]))
  );
  return store;
}
