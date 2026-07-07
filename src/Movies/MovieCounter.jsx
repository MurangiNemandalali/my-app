import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export function MovieCounter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  return (
    <div>
      <div className="action-buttons ">
        <button
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
        </button>
      </div>
    </div>
  );
}
