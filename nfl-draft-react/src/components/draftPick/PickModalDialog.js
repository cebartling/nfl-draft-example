import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class PickModalDialog extends Component {
    static propTypes = {
        draftPick: PropTypes.object.isRequired,
    };

    static defaultProps = {};

    render() {
        console.log('Rendering pick dialog...');
        const {draftPick} = this.props;
        return (
            <div className="modal" id="myModal" tabIndex="-1" role="dialog"
                 aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">
                                {draftPick.Team}: Round {draftPick.Round}, Pick {draftPick.Pick}
                            </h4>
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PickModalDialog;
