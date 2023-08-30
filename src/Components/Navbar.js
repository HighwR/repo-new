import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from './MyContext';
import '../Styles/App.css'

function Navbar() {
    const {handleToggle} = useContext(ProductsContext)
    return (
        <nav className='nav'>
            <Link to="/"><button>Accueil</button></Link>
            <Link to="/productrow"><button>Produits</button></Link>
            <Link to="/PanierButton"><button>Panier</button></Link>
          

        </nav>
    );
}

export default Navbar;