import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class PlayerCard extends Component {
    static propTypes = {
        player: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        const {player} = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">{player.FirstName} {player.LastName}</h4>
                </div>
                <div className="card-body">
                    <div className="">{player.Position}</div>
                </div>
            </div>
        );
    }
}

export default PlayerCard;
