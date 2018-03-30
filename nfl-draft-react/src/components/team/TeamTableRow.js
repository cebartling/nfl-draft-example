import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class TeamTableRow extends Component {
    static propTypes = {
        team: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        const {team} = this.props;

        return (
            <tr key={team.TeamId}>
                <td className="text-left">{team.Name}</td>
            </tr>
        );
    }
}

export default TeamTableRow;
