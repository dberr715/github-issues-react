import React, { useEffect, useState } from "react";

export const FetchIssues = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getReactIssues();
  }, []);

  const getReactIssues = () => {
    const apiUrl =
      "https://api.github.com/repos/facebook/create-react-app/issues";
    const getIssues = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTitles(data);
      //   setTitles([data, ...titles]);
      console.log("Data:", data);
    };
    getIssues();
  };
  console.log("Dataaaaa:", titles);
  return (
    <>
      <p>Hello</p>
      <ul>
        {titles.map((issue, index) => (
          <li key={index}>
            <strong>Issue Title:</strong> {issue.title}
            <br />
            <strong>Issue Body Info:</strong> {issue.body}
          </li>
        ))}
      </ul>
    </>
  );
};
