/* eslint-disable react/prop-types */

const NoForwardRef = ({ sms }) => {
  // console.log(sms, ref, "NoForwardRef");
  return (
    <div>
      <h1>NoForwardRef</h1>
      <input type="text" />
      {sms}
    </div>
  );
};

export default NoForwardRef;
