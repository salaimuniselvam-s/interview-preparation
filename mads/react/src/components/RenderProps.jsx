import PropTypes from "prop-types";

const RenderProps = ({ render }) => {
  return <div>{render("render props")}</div>;
};

RenderProps.propTypes = {
  render: PropTypes.func.isRequired,
};

export default RenderProps;
