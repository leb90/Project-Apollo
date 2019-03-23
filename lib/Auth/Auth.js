import { AsyncStorage } from 'react-native';

const isAutheticated = () => {
  const token = AsyncStorage.getItem("token");
  if (token) {
    return true;
  } else {
    console.log("With out Authorization");
    return false;
  }
};
export default isAutheticated;
