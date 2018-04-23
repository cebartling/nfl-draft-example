import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class DraftPickTableRow extends Component {
    static propTypes = {
        draftPick: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        const {draftPick} = this.props;

        return (
            <tr key={draftPick.PickId}>
                <td className="text-right">{draftPick.OverallPick}</td>
                <td className="text-right">{draftPick.Round}</td>
                <td className="text-right">{draftPick.Pick}</td>
                <td className="text-left">{draftPick.Team}</td>
            </tr>
        );
    }
}

export default DraftPickTableRow;
