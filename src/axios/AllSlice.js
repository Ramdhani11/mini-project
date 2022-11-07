import axios from "axios";

const URL = "https://dynamic-whale-82.hasura.app/v1/graphql";
const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret":
    "dDcLzo0X8O8VTHhHvKoe2VM3cgsGcxWg1W746MEhurdbY2XNYMb0kZLXwE41fKWo",
};

export const getAllShoes = async (cb) => {
  try {
    let result = await axios({
      method: "post",
      url: URL,
      headers: headers,
      data: {
        operationName: "MyQuery",
        query: `query MyQuery {
          shoes(order_by: {id: asc}) {
            id
            images
            merek
            ukuran
            deskripsi
            harga
            kategori
          }
        }`,
        variables: {},
      },
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};
export const getMenShoes = async (cb) => {
  try {
    let result = await axios({
      method: "post",
      url: URL,
      headers: headers,
      data: {
        operationName: "MyQuery",
        query: `query MyQuery {
          shoes(where: {kategori: {_like: "Pria"}}) {
            id
            images
            merek
            ukuran
            deskripsi
            harga
            kategori
          }
        }`,
        variables: {},
      },
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};
export const getWomenShoes = async (cb) => {
  try {
    let result = await axios({
      method: "post",
      url: URL,
      headers: headers,
      data: {
        operationName: "MyQuery",
        query: `query MyQuery {
          shoes(where: {kategori: {_like: "Wanita"}}) {
            id
            images
            merek
            ukuran
            deskripsi
            harga
            kategori
          }
        }`,
        variables: {},
      },
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};
export const addShoes = async ({
  merek,
  ukuran,
  gambar,
  kategori,
  harga,
  deskripsi,
}) => {
  // console.log(merek, ukuran, gambar, harga, deskripsi, kategori);
  await axios({
    method: "post",
    url: URL,
    headers: headers,
    data: {
      operationName: "MyMutation",
      query: `mutation MyMutation($deskripsi: String = "${deskripsi}", $harga: Int = ${harga}, $images: String = "${gambar}", $kategori: String = "${kategori}", $ukuran: String = "${ukuran}", $merek: String = "${merek}") {
          insert_shoes(objects: {deskripsi: $deskripsi, harga: $harga, images: $images, kategori: $kategori, ukuran: $ukuran, merek: $merek}) {
            returning {
              id
            }
          }
        }`,
      variables: {},
    },
  });
};
export const deleteShoes = async (id) => {
  // console.log(merek, ukuran, gambar, harga, deskripsi, kategori);
  await axios({
    method: "post",
    url: URL,
    headers: headers,
    data: {
      operationName: "MyMutation",
      query: `mutation MyMutation {
        delete_shoes(where: {id: {_eq: ${id}}}) {
          affected_rows
        }
      }`,
      variables: {},
    },
  });
};
export const getOneShoes = async (id, cb) => {
  try {
    let result = await axios({
      method: "post",
      url: URL,
      headers: headers,
      data: {
        operationName: "MyQuery",
        query: `query MyQuery($_eq: Int = ${id}) {
          shoes(where: {id: {_eq: $_eq}}) {
            id
            images
            merek
            ukuran
            deskripsi
            harga
            kategori
          }
        }`,
        variables: {},
      },
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async (cb) => {
  try {
    let result = await axios({
      method: "post",
      url: URL,
      headers: headers,
      data: {
        operationName: "MyQuery",
        query: `query MyQuery {
          cart {
            harga
            id
            id_shoes
            images
            merek
            ukuran
          }
        }`,
        variables: {},
      },
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};
export const AddCart = async (shoes) => {
  try {
    await axios({
      method: "post",
      url: URL,
      headers: headers,
      data: {
        operationName: "MyMutation",
        query: `mutation MyMutation {
          insert_cart(objects: {harga: ${shoes.harga}, id_shoes: ${shoes.id}, images: "${shoes.images}", merek: "${shoes.merek}", ukuran: "${shoes.ukuran}"}) {
            returning {
              id
            }
          }
        }`,
        variables: {},
      },
    });
  } catch (error) {
    console.log(error);
  }
};
