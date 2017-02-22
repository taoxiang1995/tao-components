import React, {Component} from 'react';
import { Editor, createEditorState } from 'medium-draft';
import {convertToRaw} from 'draft-js';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import './draft-style.css';
import './style.css';

class ContentEditable extends Component {
    constructor(props){
        super(props);
        var SavedEditorState = null;
        if (this.props.SavedEditorState){
            SavedEditorState = this.props.SavedEditorState;
        }
        this.state = {
            editorState: SavedEditorState&&SavedEditorState.blocks? createEditorState(SavedEditorState):createEditorState(), // for empty content
        };

        this.onChange = (editorState) => {
            this.setState({ editorState });
            let HTMLContent = mediumDraftExporter(this.state.editorState.getCurrentContent());
            let TextContent = editorState.getCurrentContent().getPlainText();
            let EditorState = convertToRaw(editorState.getCurrentContent());
            this.props.onChange && this.props.onChange(HTMLContent, TextContent, EditorState);
        };
        this.sideButtons = [];
        this.blockButtons = [];
        this.inlineButtons = [{
            label: 'B',
            style: 'BOLD',
            icon: 'bold',
            description: 'Bold',
            }, {
            label: 'I',
            style: 'ITALIC',
            icon: 'italic',
            description: 'Italic',
            }, {
            label: 'U',
            style: 'UNDERLINE',
            icon: 'underline',
            description: 'Underline',
            }, {
            label: 'Hi',
            style: 'HIGHLIGHT',
            icon: 'highlight',
            description: 'Hightlight text',
            }, {
            label: '#',
            style: 'hyperlink',
            icon: 'link',
            description: 'Add a link',
            }];
    }

    componentDidMount() {
        this.refs.editor.focus();
        document.getElementsByClassName('md-RichEditor-root')[0]&&document.getElementsByClassName('md-RichEditor-root')[0].classList.add(this.props.EditorStyleClassName);
        document.getElementsByClassName('DraftEditor-editorContainer')[0]&&document.getElementsByClassName('DraftEditor-editorContainer')[0].classList.add(this.props.TextStyleClassName);
    }

    componentWillReceiveProps(nextProps) {
        nextProps.curentEditingQuestion != this.props.curentEditingQuestion&&this.setState({
            editorState: nextProps.SavedEditorState&&nextProps.SavedEditorState.blocks? createEditorState(nextProps.SavedEditorState):createEditorState()
        })
    }
    

    render() {
        const { editorState } = this.state;
            return (
                <div className={"Tao-ContentEditable"}>
                    <Editor
                        sideButtons={this.sideButtons}
                        placeholder={this.props.placeholder?this.props.placeholder:'Write Your Text Here..'}
                        ref="editor"
                        editorState={editorState}
                        onChange={this.onChange} 
                        inlineButtons={this.props.inlineButtons? this.props.inlineButtons : this.inlineButtons}
                        blockButtons={this.props.blockButtons? this.props.blockButtons : this.blockButtons}
                        />
                </div>
            );
    }
}

export default ContentEditable;