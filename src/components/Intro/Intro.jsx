import React from 'react'
import "./Intro.css"
function intro() {
  return (
    <div>
    <div className='Intro' data-aos="fade-up">
        <div className='title' data-aos="fade-left">
            <h1>Nossa Loja</h1>
        </div>
        <div className='text' data-aos="fade-right">
            <p>A Delicia Divina tem como objetivo atender você e sua família da melhor forma possível, oferecemos nossos deliciosos produtos com a intenção somente em despertar o prazer, trazendo muito sabor para sua vida </p>
        </div>

    </div>

    <div className='container-image-text' data-aos="fade-up">
        <div className='image'>
            <img src="../img-loja/frente.jpg" alt=""/>     
        </div>
        <div className='back-container-image-text'>
            
        <div className='text-container-image-text'>
            <h2>Atendimento</h2>
            <p>Horários</p>
            <p>9h00 até as 19h00</p>
            <p>Fechado  (Segunda e Domingo)</p>
            <h2 className='delivery'>Delivery</h2>
            <button><a href='https://wa.me/5519997643065' target='_blank'>Faça seu Pedido</a></button>
            <h2 className='endereco'>Endereço</h2>
            <p>Rua Vasco Altafim 482</p>
        </div>
            
        </div>
    </div>
    </div>
  )
}

export default intro