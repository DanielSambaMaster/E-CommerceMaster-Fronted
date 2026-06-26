
import headerStyle from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faMagnifyingGlass from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlassPlus';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlassDollar';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faSistrix } from '@fortawesome/free-brands-svg-icons/faSistrix';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
export default function Header() {
  return (
    <>
<header className={headerStyle.header}>
<div className={headerStyle.logo}>

OkuTokeka

</div>  
<div className={headerStyle.searchbar}>
<input type="text" placeholder='Search for products, brands and more' className={headerStyle.searchInput}/> 
<button className={headerStyle.searchButton}><FontAwesomeIcon icon={faSistrix} className={headerStyle.searchIcon} /></button>
</div>

<div className={headerStyle.cart}>
<div className={headerStyle.cartItem}><FontAwesomeIcon icon={faHeart} />Favorito<div className={headerStyle.cartItemCount}>2</div></div>
<div className={headerStyle.cartItem}><FontAwesomeIcon icon={faShoppingCart} />Carrinho <div className={headerStyle.cartItemCount}>2</div></div>
<div className={headerStyle.cartItem}><FontAwesomeIcon icon={faUser} />Entrar</div>
</div>


</header>
<Categorys></Categorys>
    </>
  )
}


function Categorys() {
  return (

    <div className={headerStyle.categorys}>
      <div className={headerStyle.categoryItem}><button className={headerStyle.categoryButtonMain}><div><FontAwesomeIcon icon={faBars} />Todas as Categorias</div><FontAwesomeIcon icon={faArrowRight} /></button></div> 
      <div className={headerStyle.categoryItem}>Inicio</div> 
      <div className={headerStyle.categoryItem}>Categotia1</div>
      <div className={headerStyle.categoryItem}>Categoria 4</div>
      <div className={headerStyle.categoryItem}>Categoria 5</div>
      <div className={headerStyle.categoryItem}>Categoria 6</div>
      <div className={headerStyle.categoryItem}>Promoções</div>

      

    </div>
  )


} 