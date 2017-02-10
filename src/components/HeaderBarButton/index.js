/* external dependencies*/
import React, {Component} from 'react';
/* internal dependencies*/
import './style.css';

const HeaderBarButton = ({buttonType, buttonTitle, buttonColor, onClick})=>{
  // const handleViewButtonClick = (ViewWindowElement)=>{
  //    ViewWindowElement.classList.add('HeaderBar-ViewWindow-Max');
  // }

  const renderButtonIcon = ()=>{
    switch (buttonType) {
      case 'view':
        return (<div
          onClick={onClick}
          className={'HeaderBarButton-Icon '+buttonColor}>
            <i className="ion-ios-play HeaderBarButton-Icon-Icon" />
          </div>);
        break;
      case 'save':
        return (<div
            className={'HeaderBarButton-Icon '+buttonColor}>
              <i className="ion-ios-download HeaderBarButton-Icon-Icon" />
          </div>);
      case 'theme':
        return (<div
            className={'HeaderBarButton-Icon '+buttonColor}>
              <i className="ion-waterdrop HeaderBarButton-Icon-Icon" />
          </div>);
      case 'share':
        return (<div
            className={'HeaderBarButton-Icon '+buttonColor}>
              <i className="ion-share HeaderBarButton-Icon-Icon" />
          </div>);
      default:

    }
  };

  return (
    <div className="HeaderBarButton">
        {renderButtonIcon()}
      <div className="HeaderBarButton-Title">
        {buttonTitle}
      </div>
    </div>
  );
};

HeaderBarButton.propTypes = {
  buttonType: React.PropTypes.string.isRequired,
  buttonTitle: React.PropTypes.string.isRequired,
  buttonColor: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default HeaderBarButton;
