import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "lodash";
class Formatter extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ]),
    valueFormatter: PropTypes.func,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    value: null,
    valueFormatter: identity,
    component: "div",
  };

  render() {
    const {
      value,
      valueFormatter,
      component: Component,
      ...props
    } = this.props;
    const formattedValue = valueFormatter(value);

    return <Component {...props}>{formattedValue}</Component>;
  }
}
export default Formatter;
