import { useState } from "react";
import { ColorBox } from "./ColorBox";

// Task - Clue: Hook & Conditional Styling
export function ColorGame() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };

  // Task 2.1 First list the 3 boxes on the screen
  const [colorList, setColorList] = useState(["orange", "plum", "red"]);

  const deleteColor = (index) => {
    // setState -> Re-render
    setColorList(colorList.toSpliced(index, 1));
  };
  return (
    <div>
      <input
        type="text"
        style={styles}
        onChange={(event) => setColor(event.target.value)}
      />
      {/* Copy color list + new color */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {colorList.map((clr, idx) => (
        <ColorBox clr={clr} deleteClr={() => deleteColor(idx)} />
      ))}
    </div>
  );
}
