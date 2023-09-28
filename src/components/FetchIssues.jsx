import React, { useEffect, useState } from "react";
import { IssuesLog } from "./IssuesLog";

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
    };
    getIssues();
  };

  return <IssuesLog titles={titles} />;
  //     <>
  //       <h2>Github React Issues Log</h2>
  //       <ol>
  //         {titles.map((issue, index) => (
  //           <li key={index}>
  //             <strong>Issue Title:</strong> {issue.title}
  //             <br />
  //             <strong>Issue Body Info:</strong> {issue.body}
  //           </li>
  //         ))}
  //       </ol>
  //     </>
  //   );
};
