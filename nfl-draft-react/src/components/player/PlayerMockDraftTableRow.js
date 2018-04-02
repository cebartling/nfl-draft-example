import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class PlayerMockDraftTableRow extends Component {
    static propTypes = {
        pick: PropTypes.number.isRequired,
        player: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        const {player} = this.props;

        return (
            <tr key={player.PlayerId}>
                <td className="text-left">{player.FirstName} {player.LastName}</td>
                <td className="text-left">{player.Position}</td>
                <td className="text-left">{player.College}</td>
            </tr>
        );
    }
}

export default PlayerMockDraftTableRow;
