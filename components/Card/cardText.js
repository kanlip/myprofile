import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const CardText = React.memo(props => {
  return (
    <div className="cardbottom">
      <Typography variant="h6" className={props.className}>
        <b>{props.workType}</b>
      </Typography>
      <Typography variant="body1" className={props.className}>
        {props.work}
      </Typography>
    </div>
  );
});
CardText.propTypes = {
  className: PropTypes.string.isRequired,
  workType: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired
};
export default CardText;