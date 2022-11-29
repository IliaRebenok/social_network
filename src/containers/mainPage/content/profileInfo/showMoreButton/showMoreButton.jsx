import React from 'react';
import ShowMore from '../moreInfo/showMore';
import s from './showMoreButton.module.css'

class ShowMoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMoreInfo: false };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showMoreInfo: !state.showMoreInfo
        }));
    }

    render() {
        return (
            <div>                
                <button className={s.moreButton} onClick={this.handleToggleClick}>
                    {this.state.showMoreInfo ?
                        'Hide information' :
                        'Show more information'
                    }
                </button>
                <ShowMore show={this.state.showMoreInfo} />
            </div>
        )
    }
}

export default ShowMoreButton;
