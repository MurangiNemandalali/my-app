export function ColorBox({ clr, deleteClr }) {
  const styles = {
    height: "1.5rem",
    width: "14rem",
    marginBlockStart: "1rem",
    backgroundColor: clr,
    display: "flex",
    justifyContent: "flex-end",
  };

  return (
    <div style={styles}>
      <button onClick={deleteClr}>❌</button>
    </div>
  );
}
