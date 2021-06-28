import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';

class AlertMessage extends Component {
    render() {
        return (
            <>
            {this.props.aler &&
                <Alert variant={'variant'}>
                </Alert>
    }
            </>
        )
    }
}

export default AlertMessage
