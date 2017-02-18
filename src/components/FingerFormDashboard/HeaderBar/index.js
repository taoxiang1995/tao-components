import React, {Component} from 'react';
import './style.css';

class HeaderBar extends Component {
    render() {
        return (
            <div className={"HeaderBar header-bar-container"}>
        		<div className = "header-bar-navigator">
					<i className="ion-grid header-bar-navigator-icon"></i>
				</div>
    			<div className = "header-bar-title">
					FingerForm
				</div>
        		<div className = "header-bar-middle">
        			<input className = "header-bar-searchbox" placeholder = "Search a form"/>
        		</div>
        		<div className = "header-bar-right">
        			<div className="header-bar-account">
        				<i className="ion-android-notifications-none header-bar-account-icon"></i>
        			</div>
        			<div className="header-bar-account">
        				<i className="ion-person header-bar-account-icon"></i>
        			</div>
                    <div className="header-bar-account">
                        <i className="ion-ios-help header-bar-account-icon"></i>
                    </div>
        			<div className = "header-bar-plan">Baby</div>
        		</div>
            </div>
        );
    }
}

export default HeaderBar;