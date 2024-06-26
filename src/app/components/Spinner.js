import Image from  "next/image";
import Styles from "./main.module.css";


export default function Spinner() {
    return(
        <Image
        src="/loading.svg" 
        alt='Imagem carregando' 
        width={100} 
        height={100}/>
    );
}