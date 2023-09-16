import React from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineClockCircle,} from 'react-icons/ai'
import "./Intro.css"
function intro() {
  return (
    <div>
    <div className='Intro' data-aos="fade-up" id='localizacao'>
        <div className='title' data-aos="fade-left">
            <h1>Nossa Loja</h1>
        </div>
        <div className='text' data-aos="fade-right">
            <p>A Delicia Divina tem como objetivo atender você e sua família da melhor forma possível, oferecemos nossos deliciosos produtos com a intenção somente em despertar o prazer, trazendo muito sabor para sua vida </p>
        </div>

    </div>

    <div className='container-image-text' data-aos="fade-up">
        <div className='image'>
            <img src="img-loja/frente.jpg" alt=""/>     
        </div>
        <div className='back-container-image-text'>
            
        <div className='text-container-image-text'>
            <h2>Atendimento</h2>
            
            <p><AiOutlineClockCircle/> Horários</p>
            <p>9h00 até as 19h00</p>
            <h3>Fechado  (Segunda e Domingo)</h3>
            <p> <HiOutlineLocationMarker/>  Localização</p>
            <p>Rua Vasco Altafim 482, Santa Cruz</p>
            <div className='delivery-container'>
            <h2 className='delivery'>Delivery</h2>
            <button><a href='https://wa.me/5519997643065' target='_blank'>Faça seu Pedido</a></button>
            </div>
            
            
        </div>
            
        </div>
    </div>
    </div>
  )
}

export default intro