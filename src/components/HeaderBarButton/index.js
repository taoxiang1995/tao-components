/* external dependencies*/
import React, {Component} from 'react';
/* internal dependencies*/
import './style.css';
import '../../css-libraries/ionicons/css/ionicons.css';

const HeaderBarButton = ({buttonType, buttonTitle, buttonColor, onClick, className})=>{
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
    <div className={"HeaderBarButton "+className}>
        {renderButtonIcon()}
    </div>
  );
};

HeaderBarButton.propTypes = {
  buttonType: React.PropTypes.string.isRequired,
  buttonTitle: React.PropTypes.string,
  buttonColor: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  className: React.PropTypes.string,
};

export default HeaderBarButton;
