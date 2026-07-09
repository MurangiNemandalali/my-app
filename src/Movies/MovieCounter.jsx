import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export function MovieCounter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  return (
    <>
      <div className="action-buttons">
        <IconButton
          aria-label="show 4 unread messages"
          className="action-button action-button-1"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          <Badge badgeContent={like} color="success">
            <ThumbUpIcon />
          </Badge>
        </IconButton>
        <IconButton
          aria-label="show 4 unread messages"
          className="action-button action-button-2"
          onClick={() => {
            setDisLike(disLike + 1);
          }}
        >
          <Badge badgeContent={disLike} color="error">
            <ThumbDownIcon />
          </Badge>
        </IconButton>
      </div>

      {/* <button
        className="action-button action-button-1"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <ThumbUpIcon /> {like}
      </button>
      <button
        className="action-button action-button-2"
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        <ThumbDownIcon /> {disLike}
      </button> */}
    </>
  );
}
