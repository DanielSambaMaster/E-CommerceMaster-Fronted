import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productStyle from "./Product.module.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
export default function Product() {
  return (
   <>
   <div className={productStyle.productShow}>
    <div className={productStyle.productShowItem}>
        <div className={productStyle.productInfo}>
            <div className={productStyle.productShowBnt}><button className={productStyle.productShowbutton}>Novo Lançamento</button></div>
            <div className={productStyle.productInfoText}><div className={productStyle.productInfoTitle}>Tecnologia que conecta o <span className={productStyle.productInfoTitleSpan}>futuro</span></div>
            <div className={productStyle.productInfoDescription}>Os melhores produtos com os melhores preços incriveis para o teu dia a dia </div></div>
            <div className={productStyle.productbntAtions}>
                <button className={productStyle.productInfoButton}>Comprar Agora <FontAwesomeIcon icon={faArrowRight} /></button>
                <button className={productStyle.productInfoButton}><FontAwesomeIcon icon={faPlay} /></button>

            </div>
        </div>
        <div className={productStyle.productImage}>

        </div>

    </div>
   </div>
   </>
  );
}