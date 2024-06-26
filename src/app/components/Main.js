'use client'
import Image from "next/image";
import styles from "./main.module.css";
import styles from "next/image";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default async function Main() {

  const [listProducts, setListProducts] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProduct = async () => {
    
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();

    setListProducts(data);
    }
    getProduct();
  },[])

  if(listProducts[0] == null){
    return <Spinner/>
  }

  const orderAZ = () => {
    const newList = [...listProducts].sort((a,b) => b.title.localeCompare(a.title));
    setListProducts(newList);
  }
    const orderZA = () => {
      const newList = [...listProducts].sort((a,b) => b.title.localeCompare(a.title));
      setListProducts(newList);
      }

      const orderPriceMaior = () => {
        const newList= [...listProducts].sort((a,b) => a.price - b.price);
        setListProducts(newList);
      }

      const orderPriceMenor = () => {
        let newList= [...listProducts].sort((a,b) => a.price - b.price); 
        newList = newList.reverse();
        setListProducts(newList);
        }
        
        const searchText = (text) => {
        setSearch(text);
        
        if (text.trim() == ""){
        setListProducts(listComplete);
        return
        }
        
        const newList = listProducts.filter((product) => product.title.toUpperCase().trim().includes(search.toUpperCase().trim()))
        setListProducts(newList);
        }
        
      return (
        <>
        <div className={styles.ordernar}>
          <input type="text" value={search} onChange={(event)=> searchText(event.target.value)}/>
          <div>
          <h4 style={{display:"inline", paddingRight:"10px"}}>Classificar por:</h4>
          <button onClick={orderAZ}>A a Z</button>
          <button onClick={orderZA}>Z a A</button>
          <button onClick={orderPriceMenor}>Menor Preço</button>
          <button onClick={orderPriceMaior}>Maior Preço</button>
          </div>
          
        </div>
  
    <main className={styles.main}>
      {data.map((products) => (
        <div className={styles.card} key={products.id}>
          <p style={{fontSize: 20}}>
          {products.title}</p>
          <p style={{ color: "red" }}>{products.price}</p>
          <div className="img">
            <Image width={150} height={150} src={products.image} />
            <p style={{fontSize:20}}>
            {products.description}</p>
            <p style={{fontSize:20}}
            >Categoria: {products.category}</p>
            <button>Compre aqui!</button>
          </div>
        </div>
      ))}
    </main>
    </>
  );
}
