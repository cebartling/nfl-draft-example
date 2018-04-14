import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {convertHeight} from '../../utils/ConvertHeight';
import {convertWeight} from '../../utils/ConvertWeight';

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
                <td className="text-center">{convertHeight(player.HeightInMeters)}</td>
                <td className="text-center">{convertWeight(player.WeightInKilograms)}</td>
                <td className="text-center">{player.Position}</td>
                <td className="text-left">{player.College}</td>
            </tr>
        );
    }
}

export default PlayerMockDraftTableRow;
