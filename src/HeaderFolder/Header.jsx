
import headerStyle from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faMagnifyingGlass from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlassPlus';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlassDollar';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
export default function Header() {
  return (
    <>
<header className={headerStyle.header}>
<div className={headerStyle.logo}>

Sua Marca

</div>  
<div className={headerStyle.searchbar}>
<input type="text" placeholder='Search for products, brands and more' className={headerStyle.searchInput}/> 
<button className={headerStyle.searchButton}><FontAwesomeIcon icon={faMagnifyingGlassChart} /></button>
</div>

<div className={headerStyle.cart}>
<div><FontAwesomeIcon icon={faHeart} />Favorito</div>
<div><FontAwesomeIcon icon={faShoppingCart} />Carrinho</div>
<div><button><FontAwesomeIcon icon={faUser} />Login</button></div>
</div>


</header>
    </>
  )
}