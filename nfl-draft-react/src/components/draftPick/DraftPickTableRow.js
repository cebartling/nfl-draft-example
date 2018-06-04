import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import PickModalDialog from "./PickModalDialog";
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class DraftPickTableRow extends Component {
    static propTypes = {
        draftPick: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.onClickPickButton = this.onClickPickButton.bind(this);
        // this.state = {showPickDialog: false};
    }

    onClickPickButton() {
        // this.setState({showPickDialog: true});
        const el = findDOMNode(this.refs.modalDialog);
        $(el).modal('show');
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
                    </div>
                    <div>
                        {/*{this.state.showPickDialog ?  : null}*/}
                        <PickModalDialog ref="modalDialog" draftPick={draftPick}/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default DraftPickTableRow;
