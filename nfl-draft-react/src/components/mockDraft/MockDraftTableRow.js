import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import moment from 'moment';

class MockDraftTableRow extends Component {
    static propTypes = {
        mockDraft: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        const {mockDraft} = this.props;
        return (
            <tr key={mockDraft.MockDraftId}>
                <td className="text-right">{mockDraft.Name}</td>
                <td className="text-right">{moment(mockDraft.LastUpdated).format("dddd, MMMM Do YYYY, h:mm:ss A")}</td>
            </tr>
        );
    }
}

export default MockDraftTableRow;
