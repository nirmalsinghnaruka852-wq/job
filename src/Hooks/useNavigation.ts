import { useNavigate } from "react-router-dom";
import type { RoutePath } from "../utils/Constant/NavLink";

export function useNavigation() {
  const navigate = useNavigate();
  
  const go = (path: RoutePath) => {
    navigate(path);
  };

  return { go };
}
