'use client'
import styles from "../components/main.module.css";
import { Image } from "next/image";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorGetData from "./ErrorGetData";

export default function Main() {

  const [listProducts, setListProducts] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try{

      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setListProducts(data);
      setListComplete(data);
      }catch{
        setErrorFetch(true);
      }
    }
    getProduct();
  }, [])

  const orderAZ = () => {
    const newList = [...listProducts].sort((a, b) => b.title.localeCompare(a.title));
    setListProducts(newList);
  }
  const orderZA = () => {
    const newList = [...listProducts].sort((a, b) => b.title.localeCompare(a.title));
    setListProducts(newList);
  }

  const orderPriceMaior = () => {
    const newList = [...listProducts].sort((a, b) => a.price - b.price);
    setListProducts(newList);
  }

  const orderPriceMenor = () => {
    let newList = [...listProducts].sort((a, b) => a.price - b.price);
    newList = newList.reverse();
    setListProducts(newList);
  }

  const searchText = (text) => {
    setSearch(text);

    if (text.trim() == "") {
      setListProducts(listComplete);
      return
    }

    const newList = listProducts.filter((product) => product.title.toUpperCase().trim().includes(search.toUpperCase().trim()))
    setListProducts(newList);
  }
  if (errorFetch == true){
    return <ErrorGetData/>
  }
    if (listComplete[0] == null){
      return(
        <main className={styles.main}>
          <Spinner/>
        </main>
      )
    }

  return (
    <>
      <div className={styles.ordernar}>
        <input type="text" value={search} onChange={(event) => searchText(event.target.value)} />
        <div>
          <h4 style={{ display: "inline", paddingRight: "10px" }}>Classificar por:</h4>
          <button onClick={orderAZ}>A a Z</button>
          <button onClick={orderZA}>Z a A</button>
          <button onClick={orderPriceMenor}>Menor Preço</button>
          <button onClick={orderPriceMaior}>Maior Preço</button>
        </div>

      </div>

      <main className={styles.main}>
        {listProducts.map((product) => (
          <div className={styles.card} key={product.id}>
            <p style={{ fontSize: 20 }}>
              {product.title}</p>
            <p style={{ color: "red" }}>{product.price}</p>
            <img src={product.image} alt=""/>
            <div className="img">
             
              <p style={{ fontSize: 20 }}>{product.description}</p>
              <p style={{ fontSize: 20 }}>Categoria: {product.category}</p>
              <button>Compre aqui!</button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
