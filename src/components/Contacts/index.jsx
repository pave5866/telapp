import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css/"
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Ecrin",
      tel_numarasi: "123",
    },
    {
      fullname: "Selda",
      tel_numarasi: "123",
    },
    {
      fullname: "Kerem",
      tel_numarasi: "789",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      {/* <hr /> */}
      <h1 style={{borderBottom:"black dashed",padding:"5px"}} className="baslik">Contacts App</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
