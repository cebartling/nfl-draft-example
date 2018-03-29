import React, {Component} from 'react';

class Footer extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const year = new Date().getFullYear();

        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="copyright">
                        &copy; {year}, Christopher Bartling.
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
