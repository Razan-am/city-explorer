import React, { Component } from 'react'

class AlertMessage extends Component {
    render() {
        return (
            <>
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert with{' '}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                    like.
                </Alert>
            </>
        )
    }
}

export default AlertMessage
