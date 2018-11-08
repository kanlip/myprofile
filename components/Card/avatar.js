import React from "react";
import PropTypes from "prop-types";
const Avatar = React.memo((props)=> {
  return <img src={props.src} className="logo" alt={props.alt} />;
});
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Avatar;