import React from 'react';
import {Link} from 'react-router';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.onLinkClicked = this.onLinkClicked.bind(this);
    }

    componentDidMount() {
    }

    onLinkClicked(event) {
        event.preventDefault();
        this.context.router.push(`/contacts/${this.props.id}`);
    }

    render () {
        return (
            <div>
                <span>{this.props.id}:</span>
                &nbsp;
                <strong>
                    <Link to={'/contacts/' + this.props.id} onClick={this.onLinkClicked}>
                        {this.props.name}
                    </Link>
                </strong>
                &nbsp;
                {this.props.phoneNumber}
            </div>
        );
    }
}

Contact.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Contact;