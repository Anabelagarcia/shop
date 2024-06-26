import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>

      <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Youtube</a></li>
        </ul>
      <p>A Shop foi criada em 10 de outubro de 2007</p>
      <Image width={100} height={100} src="https://img.freepik.com/vetores-gratis/design-de-logotipo-local-de-loja-desenhada-a-mao_23-2149575766.jpg"/>
    </footer>
  );
}
