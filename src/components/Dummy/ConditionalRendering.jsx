import React from "react";

export default function ConditionalRendering() {

    const [unreadMessages, setunreadMessages] = React.useState(["A","B"]);

    return (
        <div>
            {unreadMessages.length > 0 ? <h1>You have {unreadMessages.length} unread messages!</h1> : <p>You have no unread messages.</p>}
        </div>
    )
}