import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scroll To Top on Route Change
 * @name ScrollToTop
 * @param {object} props
 * @returns {object}
 */
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
