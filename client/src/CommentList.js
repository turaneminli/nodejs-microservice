/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ comments }) => {
  console.log("Comments:" + comments);
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
