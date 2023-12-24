import { useState } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", tel_numarasi: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // Sayfanın yeniden yüklenmesini önlemek için preventDefault fonksiyonunu kullanıyoruz
    e.preventDefault();

    if (form.fullname === "" || form.tel_numarasi === "") {
      return false;
    }

    addContact([...contacts, form]);

    // ! Formu temizle

    clearForm();
  };

  const clearForm = () => {
    // Tüm input alanlarını temizle
    const clearedForm = Object.keys(form).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});

    setForm(clearedForm);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <hr /> */}
      <div>
        <input
          name="fullname"
          placeholder="Ad-Soyad Giriniz..."
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="tel_numarasi"
          placeholder="Telefon-No Giriniz..."
          value={form.tel_numarasi}
          onChange={onChangeInput}
        />
        {/* <hr /> */}
      </div>
      <div style={{borderTop:"black dashed",padding:"5px"}}>
        <button className="btn">Kişi Ekle</button>
      </div>
    </form>
  );
}

export default Form;
