import React from "react"

export default function ProfileCardComponent() {
    const avatar = "https://www.pushpaganan.com/images/pushpaganan-pic.jpg"
    const starEmpty = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/2048px-Empty_Star.svg.png"
    const starFilled = "https://static.thenounproject.com/png/584291-200.png"
    const [contact, setContact] = React.useState(
        {
            firstName: "Pushpaganan",
            lastName: "Nagarajan",
            phone: "+31 681-255-018",
            email: "ayanpush@gmail.com",
            isFavorite: false
        }
    )

    let starSwitch = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => (
            {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        ))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starSwitch}
                            width="20px"
                            height="20px"
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName + " " + contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}