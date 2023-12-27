import { Link } from "react-router-dom"
type Contato = {
    id: number,
    name: string
}
const contacts: Contato[] = [
    {
        id:1,
        name: "Arielle"
    },
    {
        id:2,
        name: "Rodolfinho Lindo"
    }
]
function Contact() {
    return (
        <>
        <h1>Contatos</h1>
        <ul>
            {contacts.map((contact)=>(
                <li key={contact.id} >
                    <p><Link to={`/contact/${contact.id}`}>Contato {contact.name}</Link></p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Contact