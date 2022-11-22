import { restaurantTypes } from "../types/restaurantTypes";

const initialState = {
  restaurant: [],
};

export const restaurantReducers = (state = initialState, action) => {
  switch (action.type) {
    case restaurantTypes.GET_RESTAURANT:
      return {
        ...state,
        restaurant: action.payload.restaurant,
          };
      case restaurantTypes.ADD_RESTAURANT:
          return {
              ...state,
              restaurant: [
                  ...state.restaurant,
                  action.payload
              ]
          }
          case restaurantTypes.FILTER_RESTAURANT:
            return {
                ...state, 
                restaurant: action.payload.restaurant,
            };
    default:
      return state;
  }
};
