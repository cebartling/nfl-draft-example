import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class DraftPickTableRow extends Component {
    static propTypes = {
        draftPick: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.onClickPickButton = this.onClickPickButton.bind(this);
        this.onClickTradeButton = this.onClickTradeButton.bind(this);
    }

    onClickPickButton() {
        const {draftPick} = this.props;
        console.log('Making pick...', draftPick);
    }

    onClickTradeButton() {
        const {draftPick} = this.props;
        console.log('Trading pick...', draftPick);
    }

    render() {
        const {draftPick} = this.props;

        return (
            <tr key={draftPick.PickId}>
                <td className="text-right">{draftPick.OverallPick}</td>
                <td className="text-right">{draftPick.Round}</td>
                <td className="text-right">{draftPick.Pick}</td>
                <td className="text-left">{draftPick.Team}</td>
                <td className="text-center">
                    <div className="btn-group" role="group" aria-label="Mock draft actions">
                        <button className="btn btn-success btn-sm" onClick={this.onClickPickButton}>Pick</button>
                        <button className="btn btn-secondary btn-sm" onClick={this.onClickTradeButton}>Trade</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default DraftPickTableRow;
