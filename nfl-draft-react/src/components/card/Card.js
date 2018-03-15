import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Card extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    static defaultProps = {};

    render() {
        const {title} = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">{title}</h4>
                </div>
                <div className="card-body">
                </div>
            </div>
        );
    }
}

export default Card;
