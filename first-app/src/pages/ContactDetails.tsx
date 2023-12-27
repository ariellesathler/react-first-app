import { useParams } from "react-router-dom"

function ContactDetails() {
    const {id} = useParams();
    return (
        <>
        <h2>Contato - {id}</h2>
        </>
    )
}

export default ContactDetails