import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./entry";
console.log(emojipedia);
function ent(en) {
  return (
    <Entry
      key={en.id}
      emoji={en.emoji}
      name={en.name}
      description={en.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <d1 className="dictionary">{emojipedia.map(ent)}</d1>
    </div>
  );
}

export default App;
