import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner.jsx";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState();
  const [load, setLoad] = useState(true);

  const getData = async (categoria) => {
    setLoad(true);
    const querydb = getFirestore();
    const queryCollection = categoria
      ? query(collection(querydb, "items"), where("category", "==", categoria))
      : collection(querydb, "items");
    const resultado = await getDocs(queryCollection);
    const datos = resultado.docs.map((p) => ({ id: p.id, ...p.data() }));
    setItems(datos);
    setLoad(false);
  };

  useEffect(() => {
    getData(categoryId);
  }, [categoryId]);

  return <>{load ? <Spinner /> : <ItemList data={items} />}</>;
};

export default ItemListContainer;
