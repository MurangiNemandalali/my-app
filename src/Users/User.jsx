// Prop name

import { Counter } from "../concepts/03-Counter";

// Presentation - Reusability ⬆️
export function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={name + "'s profile pic"} />
      <p className="user-msg">
        Hello, <span className="user-name">{name} 🎉</span>
      </p>
      <Counter />
    </div>
  );
}
