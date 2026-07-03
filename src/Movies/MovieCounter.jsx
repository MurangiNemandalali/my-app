import { useState } from "react";

export function MovieCounter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  return (
    <div>
      <div className="action-buttons">
        <button
          onClick={() => {
            setLike(like + 1);
          }}
        >
          👍 {like}
        </button>
        <button
          onClick={() => {
            setDisLike(disLike + 1);
          }}
        >
          👎 {disLike}
        </button>
      </div>
    </div>
  );
}
