import React from "react";

export const IssuesLog = ({ titles }) => {
  return (
    <>
      <h2>Github React Issues Log</h2>
      <ol>
        {titles.map((issue, index) => (
          <li key={index}>
            <strong>Issue Title:</strong> {issue.title} <br />
            <strong>Issue Body Info:</strong> {issue.body}
          </li>
        ))}
      </ol>
    </>
  );
};
