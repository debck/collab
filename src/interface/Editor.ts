interface IEditor {
  [value:number]: {
    type: string
    children: {text: string}[]
  };
}

export default IEditor;