import React, {Component} from 'react';
import { Editor, createEditorState } from 'medium-draft';
import {convertToRaw} from 'draft-js';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import './draft-style.css';
import './style.css';

class ContentEditable extends Component {
    constructor(props){
        super(props);

        if (this.props.SavedEditorState){
            var SavedEditorState = this.props.SavedEditorState;
        }
        this.state = {
            editorState: createEditorState(SavedEditorState), // for empty content
        };

        this.onChange = (editorState) => {
            this.setState({ editorState });
            let HTMLContent = mediumDraftExporter(this.state.editorState.getCurrentContent());
            let TextContent = editorState.getCurrentContent().getPlainText();
            let EditorState = convertToRaw(editorState.getCurrentContent());
            this.props.onChange && this.props.onChange(HTMLContent, TextContent, EditorState);
        };
       
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

    
    componentWillMount() {
        //debugger;
        // document.getElementsByClassName('DraftEditor-root')[0]&&document.getElementsByClassName('DraftEditor-root')[0].classList.add(this.props.className);
    }
    

    componentDidMount() {
        this.refs.editor.focus();
        document.getElementsByClassName('DraftEditor-root')[0]&&document.getElementsByClassName('DraftEditor-root')[0].classList.add(this.props.className);

    }

    render() {
        const { editorState } = this.state;
            return (
                <div className={"Tao-ContentEditable"}>
                    <Editor
                        placeholder={this.props.placeholder?this.props.placeholder:'Write Your Text Here..'}
                        ref="editor"
                        editorState={editorState}
                        onChange={this.onChange} 
                        inlineButtons={this.inlineButtons}
                        blockButtons={this.blockButtons}
                        />
                </div>
            );
    }
}

export default ContentEditable;