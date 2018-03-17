import React, {Component} from 'react';
import './PanelHeader.css';
import {PropTypes} from 'prop-types';

class PanelHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    static defaultProps = {};

    render() {
        const {title} = this.props;

        return (
            <div className="panel-header panel-header-sm panel-header-ext">
                <h1>{title}</h1>
            </div>
        );
    }
}

export default PanelHeader;
