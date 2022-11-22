import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { restaurantTypes } from "../types/restaurantTypes";


const collectionName = "restaurants";

export const actionGetRestaurantAsync = () => {
  return async (dispatch) => {
    const restaurantCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(restaurantCollection);
    const restaurant = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        restaurant.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetRestaurantSync(restaurant));
    }
  };
};

const actionGetRestaurantSync = (restaurant) => {
  return {
    type: restaurantTypes.GET_RESTAURANT,
    payload: {
      restaurant: restaurant,
    },
  };
};

export const actionAddRestaurantAsync = (restaurant) => {
  return async (dispatch) => {
    try {
      const restaurantCollection = collection(dataBase, collectionName);
      const docs = await addDoc(restaurantCollection, restaurant);
      dispatch(actionAddRestaurantSync({ id: docs.id, ...restaurant}));
    } catch (error) {
      console.log(error);
      dispatch(actionAddRestaurantSync({}));
    }
  };
};

const actionAddRestaurantSync = (restaurant) => {
  return {
    type: restaurantTypes.ADD_RESTAURANT ,
    payload: restaurant,
  };
};

export const actionFilterRestaurantAsync = (searchParam, searchValue) => {
    return async (dispatch) => {
      const restaurantCollection = collection(dataBase, collectionName);
      const q = query(restaurantCollection, where(searchParam, "==", searchValue));
      const restaurant = [];
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          restaurant.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(actionFilterRestaurantSync(restaurant));
      }
    };
  };
  
  const actionFilterRestaurantSync = (restaurant) => {
    return {
      type: restaurantTypes.FILTER_RESTAURANT,
      payload: {
        restaurant: restaurant,
      },
    };
  };