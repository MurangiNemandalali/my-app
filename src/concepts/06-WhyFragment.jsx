/* Parent Component - Dictate Style */

export function WhyFragment() {
  return (
    <div className="container">
      <Fun />
    </div>
  );
}
// <> </> -> React fragment - No wrapper element
// No attributes / Event listener on React fragment
function Fun() {
  return (
    <>
      <h1>Coo</h1>
      <p>Nice</p>
    </>
  );
}
