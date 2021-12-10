import React, { useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

/**
 * Scroll To Top on Route Change
 * @name ScrollToTop
 * @param {object|ReactElement} children Routes
 * @returns {object|ReactElement}
 */
export default function ScrollToTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  children: PropTypes.object.isRequired,
};
