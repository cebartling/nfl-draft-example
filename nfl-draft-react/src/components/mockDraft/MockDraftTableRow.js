import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import moment from 'moment';
import {Link} from "react-router-dom";

class MockDraftTableRow extends Component {
    static propTypes = {
        mockDraft: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        const {mockDraft} = this.props;
        const location = {pathname: '/mockDraft', state: {mockDraftId: mockDraft.MockDraftId}};

        return (
            <tr key={mockDraft.MockDraftId}>
                <td className="text-right">
                    <Link to={location}>{mockDraft.Name}</Link>
                </td>
                <td className="text-right">
                    {moment(mockDraft.LastUpdated).format("dddd, MMMM Do YYYY, h:mm:ss A")}
                </td>
            </tr>
        );
    }
}

export default MockDraftTableRow;
