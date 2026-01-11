import { useNavigate } from "react-router-dom";
import type { RoutePath } from "../../config/constants/NavLink";

export default function useNavigation() {
  const navigate = useNavigate();

  const go = (path: RoutePath) => {
    navigate(path);
  };

  return { go };
}
