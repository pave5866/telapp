import { useState } from "react";

function List({ contacts }) {
  const [filtertext, setFilterText] = useState("");

  const filtered = contacts.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filtertext.toLowerCase())
    )
  );
  console.log("filtreleme", filtered);

  const clearFilter = () => {
    setFilterText("");
    console.clear();
  };
  return (
    <div>
      <input
        placeholder="Filtrele"
        value={filtertext}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div>
        <hr />
        <button className="btn" onClick={clearFilter}>
          Filtreyi Temizle
        </button>
      </div>

      <ul className="kisiler">
        <hr />
        <h1 className="addkisi">Eklenen Kişiler</h1>
        <hr />
        {filtered.map((contact, i) => (
          <li key={i}>
            {contact.fullname} - {contact.tel_numarasi}
          </li>
        ))}
        <p className="toplamkisi">
          Toplam Kayıtlı Olan Kişiler: ({contacts.length})
        </p>
        <p className="toplamkisi">
          Arama Sonucu Bulunan Kişiler: ({filtered.length})
        </p>
      </ul>
    </div>
  );
}

export default List;
