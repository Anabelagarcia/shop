import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div class={styles.Navbar}>
      <div>
        <h2 style={{ display: "inline", textAlign: "center" }}>Shop</h2>
        <Image width={100} height={100} src="https://img.freepik.com/vetores-gratis/design-de-logotipo-local-de-loja-desenhada-a-mao_23-2149575766.jpg" />
      </div>
      <div>
        <h1>Shop melhor que Shoppee</h1>
      </div>
      <nav class="Navbar__Items">
        <ul>
          <li><button><a href="#">Adionar Produto</a></button></li>
          <li><button><a href="#">Contato</a></button></li>
          <li><a href="#"><Image width={50} height={50} src="https://img.freepik.com/vetores-premium/modelo-de-design-de-logotipo-de-compras-de-carrinho-online_591497-178.jpg?w=826"/></a></li>
        </ul>
      </nav>

    </div>

  );
}
