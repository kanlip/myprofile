import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "./Card/avatar";
import CardText from "./Card/cardText";
import { fetchWorks } from "../actions/index";
const styles = {
  card: {
    width: 300,
    borderRadius: "50px",
    cursor: "pointer",
    margin: "10px"
  },
  cardContent: {
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  cardAction: {},
  typo: {
    letterSpacing: "1px"
  }
};

class CardProject extends Component {
  componentDidMount() {
    const { type } = this.props;
    this.props.fetchWorks(type);
  }
  renderCard(classes, work) {
    return work.map(work => {
      return (
        <Card key={work._id} className={classes.card}>
          <ButtonBase component="a" target="_blank" href={work.link}>
            <CardContent className={classes.cardContent}>
              <Avatar src={work.image} alt="logo" />
            </CardContent>
            <CardActions className={classes.cardAction}>
              <CardText
                workType={work.workType}
                work={work.work}
                className={classes.typo}
              />
            </CardActions>
          </ButtonBase>
        </Card>
      );
    });
  }
  render() {
    const { classes, work } = this.props;
    if (!work) {
      return <div>Loading...</div>;
    }
    if (work.length === 0) {
      return <div>No Project yet</div>;
    }
    return (
      <div className="container-card">{this.renderCard(classes, work)}</div>
    );
  }
}

function mapStateToProps({ works }) {
  return { work: works };
}
CardProject.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  { fetchWorks }
)(withStyles(styles)(CardProject));
