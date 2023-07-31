/* eslint-disable react/prop-types */
function withHoc(WrappedComponent) {
  return function WithAddionalProps({ props }) {
    return <WrappedComponent {...props} secret={"true"} />;
  };
}

const HocComponent = ({ secret }) => {
  return <div>{secret}</div>;
};

export default withHoc(HocComponent);
