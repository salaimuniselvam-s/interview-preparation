/* eslint-disable react/prop-types */
const withHoc = (WrappedComponent) => {
  return function Hoc(props) {
    return <WrappedComponent {...props} />;
  };
};

const Svs = ({ sms }) => {
  return (
    <div>
      {sms}
      {localStorage.getItem("IsLoggedIn") ? "authorized" : "not authorized"}
    </div>
  );
};

export default withHoc(Svs);
