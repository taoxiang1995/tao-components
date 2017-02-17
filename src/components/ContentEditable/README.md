# ContentEditable
## **Over View**
This react component is a contenteditable that provides functionalities for user to add styling to the text which includes: 
* block quote
* bold
* highlight
* underline
* italic 
* add a link 
* color
* font

Default of this component doesn't have outline. It exposes a callback **renderToHTML( html )** which will be called everytime
user make some changes to the text and will pass the static html as the first arguments.

## **Props**
| Name | Type | Default | Description |
| ---    | ---  | ------- | --------- |
|EditorStyleClassName | string  | '' |  the css style append to this class will be applied to the whole editor. Use it to adjust editor sizem position|
|TextStyleClassName|string|''| the css style append to this class will be applied to the text content of editor. Use it to adjust the font size, font space and font color and font family.|
|toolbarClassName  |string  |''  |the css style append to this class will be append to tool bar  |
|placeholder  | string  | 'Write Your Text Here' | The placeholder for input box |
|onChange | function |  | a callback that is fired whenever user make changes to the text content and styling. Three arguments will be passed to callback function. 1. HTMLContent: Raw HTML representation of the styled content 2. TextContent: Plain Text of styled content 3. EditorState: JSON represenation of styled content which can be used to resotre editmode of contentEditable component |
|SavedEditorState|JSON|null|saved editorstate obtained from the third augement: editorState from onChange callback. ContentEditable uses this JSON to restore the saved edit mode|
|curentEditingQuestion|number|0|the current editing question number, if changes, will set received SavedEditorState to its EditorState |