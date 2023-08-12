import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Firebase/config.js";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import Spinner from "../Spinner/Spinner.jsx";
import Error404 from "../Error404/Error404.js";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState();
  const [load, setLoad] = useState(true);

  const getSelected = async (idItem) => {
    try {
      const document = doc(db, "items", idItem);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      if (response.data()) {
        setSelectedItem(result);
        setLoad(false);
      } else {
        setSelectedItem(undefined);
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelected(id);
  }, [id]);

  return (
    <>
      {load ? (
        <Spinner />
      ) : selectedItem ? (
        <ItemDetail item={selectedItem} />
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default ItemDetailContainer;
