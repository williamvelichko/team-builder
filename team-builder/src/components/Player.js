import React from "react";

export default function Player(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>;
  }

  return (
    <div className="player container">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      <p>Age: {details.age}</p>
      <p>Height: {details.height}</p>
    </div>
  );
}
