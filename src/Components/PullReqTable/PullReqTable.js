// import axios from "axios";
import React, { useState, useEffect } from "react";
import { server, screenshot_api } from "../../utils/api";
import classes from "./PullReqTable.module.css";

const PullReqTable = () => {
  const [pullRequestList, setPullRequestList] = useState([]);
  useEffect(() => {
    getDataFromDB();
  }, []);

  const getDataFromDB = async () => {
    await server
      .get("/notifications/pull-requests1")
      .then((res) => {
        const id = Object.keys(res.data)[0];
        const pullData = Object.values(res.data[id]["pull-requests"]);
        console.log(pullData);

        setPullRequestList(pullData);
      })
      .catch((err) => {
        console.log(err);
      });
    // const arr = Object.values(res.data[id]["pull-requests"]).map(
    //   async (p) => {
    //     const img = await getImgPull(p.pull_html_url);
    //     return { ...p, img_pull_url: img };
    //     // setPullRequestList((prev) => [...prev, { ...p, img_pull_url: img }]);
    //   }
    // );
    // Promise.all(arr).then((data) => {
    //   setPullRequestList(data);
    // });
    // };
  };

  const statusClass = (action) => {
    if (action === "closed") return "red";
    return "green";
  };

  const getTimeFromTimeStamp = (timestamp) => {
    if (timestamp) {
      const date = new Date(timestamp);
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    return "";
  };

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "15px",
        }}
      >
        <h1 style={{ letterSpacing: "0.1em" }}>
          Pull Request Table, Repo Name:{" "}
          {pullRequestList.length > 0 && (
            <a
              className={classes.repoLink}
              href={pullRequestList[0].repo_html_url}
            >
              {pullRequestList[0].repoName}
            </a>
          )}
        </h1>
        <button
          onClick={() => {
            getDataFromDB();
          }}
        >
          Refresh Table
        </button>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Request Number</th>
            <th>User</th>
            <th>Title</th>
            <th>Body</th>
            <th>Created At</th>
            <th>Closed At</th>
            <th>status</th>
            <th>Screenshot</th>
          </tr>
        </thead>
        <tbody>
          {pullRequestList.map((item) => (
            <tr key={item.pull_id}>
              <td className={classes.linktd}>
                <a href={item.pull_html_url}>{item.number}</a>
              </td>
              <td className={classes.linktd}>
                <a
                  href={item.user_html_url}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.avatarUserUrl}
                    alt="github user avatar"
                    style={{ height: "5vh" }}
                  />
                  {item.user_name}
                </a>
              </td>
              <td style={{ width: "25%" }}>{item.title}</td>
              <td style={{ width: "25%" }}>{item.body}</td>
              <td style={{ width: "25%" }}>
                {getTimeFromTimeStamp(item.created)}
              </td>
              <td style={{ width: "25%" }}>
                {getTimeFromTimeStamp(item.closed)}
              </td>
              <td className={classes[statusClass(item.action)]}>
                {item.action}
              </td>
              <td className={classes.linktd}>
                {item.pull_screen ? (
                  <a href={item.pull_screen}>
                    <img
                      src={item.pull_screen}
                      alt="github pull request"
                      style={{ height: "5vh" }}
                    />
                  </a>
                ) : (
                  "Loading..."
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PullReqTable;
