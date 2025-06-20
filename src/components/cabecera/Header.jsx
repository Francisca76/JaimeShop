import React from 'react'

export const Header = () => {
  return (
    <header className='p-3 border-bottom '>
        <div className='container d-flex justify-content-between align-items-center border'>

          <img src='...' alt='logo' />

          <div>
            <button type='button' className='btn btn-dark border'>LOGIN</button>
            <button type='button'className='btn btn-light border'>CARRITO</button>
          </div>
        </div>
        <nav className='nav justify-content-center mt-3 bg-light py-2 '>
            <a className='nav-link' href="productoslistado">PRODUCTOS</a>
            <a className='nav-link' href="#">NOSOTROS</a>
            <a className='nav-link' href="#"></a>
            <a className='nav-link' href="#"></a>

           <div className='input-group w-50 border'>
            <input className='form-control me-2' type="search" placeholder="Buscar Producto..." aria-label="Search"/>
            <button className='btn btn-outline-success' type="submit">BUSCAR</button>
          </div>
        </nav>
    </header>
  )
}

