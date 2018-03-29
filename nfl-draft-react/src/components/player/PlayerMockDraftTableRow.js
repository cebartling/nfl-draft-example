import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class PlayerMockDraftTableRow extends Component {
    static propTypes = {
        pick: PropTypes.number.isRequired,
        player: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        const {pick, player} = this.props;

        return (
            <tr key={player.PlayerId}>
                <td>{pick}</td>
                <td>{player.FirstName} {player.LastName}</td>
                <td>{player.Position}</td>
            </tr>
        );
    }
}

export default PlayerMockDraftTableRow;
