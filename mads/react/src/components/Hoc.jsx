export const WithHoc = (WrapperComponent) => {
  return function HocComponet({ props }) {
    return <WrapperComponent isAdmin="admin" {...props} />;
  };
};

export default WithHoc;
