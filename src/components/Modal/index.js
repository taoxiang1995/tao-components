import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css';

export default class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleModalBackgroundClick = (e)=>{
        if (e.target.classList[0] == "Modal-Background" && this.props.hideModal){
            this.props.hideModal();
        }
    }

    onAction1Clicked = ()=>{
        if (this.props.onAction1Clicked){
            this.props.onAction1Clicked();
        }
    }

    onAction2Clicked = ()=>{
        if (this.props.onAction2Clicked){
            this.props.onAction2Clicked();
        }
    }

    headerColor = ()=>{
        switch (this.props.type) {
            case 'Warning':
                return 'Modal-Container-Header-warning'
                break;
        
            default:
                return ''
                break;
        }
    }

    renderAction1Button = ()=>{
        if (this.props.action1){
            return (
                <div onClick={this.onAction1Clicked} className="Modal-Container-Footer-Action Modal-Container-Footer-Action1">
                                {this.props.action1? this.props.action1:''}
                            </div>
            )
        }
        else{
            return '';
        }
    }

    renderAction2Button = ()=>{
        if (this.props.action2){
            return (
                <div onClick={this.onAction2Clicked} className="Modal-Container-Footer-Action Modal-Container-Footer-Action2">
                                {this.props.action2? this.props.action2:''}
                            </div>
            )
        }
        else{
            return '';
        }
    }
    
    renderModal=()=>{
        if (this.props.showModal){
            return(
                <div onClick={this.handleModalBackgroundClick} 
                className={"Modal-Background "+this.props.ClassModalContainerBackground}>
                <ReactCSSTransitionGroup
                transitionName="Modal"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionLeaveTimeout={1000}
                > 
                    <div className={"Modal-Container "+this.props.ClassModalContainer}>
                        <div className={"Modal-Container-Header  "+this.props.ClassModalContainerHeader+ ' ' +this.headerColor()}>
                            {this.props.ModalName? this.props.ModalName:'Modal Name'}
                        </div>
                        <div className={"Modal-Container-Body "+this.props.ClassModalContainerBody}>
                            {this.props.children}
                        </div>
                        <div className={"Modal-Container-Footer "+this.props.ClassModalContainerFooter}>
                            {this.renderAction1Button()}
                            {this.renderAction2Button()}
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }

    render(){
        return(
            this.renderModal()
        )
    }
}