import { useContext } from "react";
import NavigationProvider from "../context/navigation";

const useNavigation = () => {
  return useContext(NavigationProvider);
};

export default useNavigation;
