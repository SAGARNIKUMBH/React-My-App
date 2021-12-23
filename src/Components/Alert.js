import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    console.log(word);
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert-danger fs-4 alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong>:{capitalize(props?.alert?.msg)}
      </div>
    )
  );
}

export default Alert;
