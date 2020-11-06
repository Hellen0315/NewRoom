import { type as findResultsType } from "../actions/findResults";
import { type as findCategoryType } from "../actions/findCategory";
import { type as findHomeType } from "../actions/findHome";
const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case findResultsType: {
      return payload;
    }
    case findCategoryType: {
      return payload;
    }
    case findHomeType: {
      return payload;
    }
    default:
      return state;
  }
}

export default reducer;
