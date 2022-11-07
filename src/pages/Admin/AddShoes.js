import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addShoes } from "../../axios/AllSlice";
import NavbarA from "../../component/NavbarA";
import { TabTitle } from "../../component/Title";

const AddShoes = () => {
  const [merek, setMerek] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [gambar, setGambar] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  // const [form, setForm] = useState([]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    addShoes({ merek, ukuran, kategori, harga, gambar, deskripsi });
    Swal.fire("Berhasil", "Data Berhasi Ditambahkan", "success");
    navigate("/admin");
  };
  TabTitle("Tambah Sepatu");
  return (
    <>
      <NavbarA />
      <div className="container">
        <div className="addshoes">
          <form onSubmit={submitHandler}>
            <div className="form-header">
              <h4>Tambah Sepatu</h4>
            </div>
            <div className="form-content">
              <input
                type="text"
                required
                name="merek"
                placeholder="Masukan Merek Sepatu"
                onChange={(e) => setMerek(e.target.value)}
              />
              <input
                required
                type="text"
                name="ukuran"
                placeholder="Masukan Ukuran"
                onChange={(e) => setUkuran(e.target.value)}
              />
              <input
                required
                type="text"
                onChange={(e) => setGambar(e.target.value)}
                placeholder="Masukan URL Gambar"
              />
              <input
                required
                type="number"
                name="harga"
                placeholder="Harga"
                onChange={(e) => setHarga(e.target.value)}
              />
              <select
                required
                name="kategori"
                onChange={(e) => setKategori(e.target.value)}
              >
                <option value=" ">Pilih Kategori</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
              <textarea
                required
                onChange={(e) => setDeskripsi(e.target.value)}
                name="deskripsi"
                id=""
                cols="30"
                rows="6"
              ></textarea>
            </div>
            <button type="submit">Tambah</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddShoes;
