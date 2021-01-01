import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createEditor, Editor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

const initialState: any = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph."}],
  },
];

const App: React.FC = () => {
  const editor: any = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialState);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
};
export default App;
