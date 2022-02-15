import React from 'react'
import '../UsosBentonita/usosBentonita.css'

const UsosBentonita = () => {
    return (
        <section id='usos'>
            <div className='container-usos'>
             <div>
            <h3 className='title-usos'>Diferentes usos del mineral</h3>
            <p className='description-usos'>Las características especiales de la bentonita (expansión, absorción de agua, viscosidad, tixotropía) permiten el uso de este recurso en un amplio rango de sectores industriales y aplicaciones.</p>
            </div>
            <div className='container-usos-data'>
               
                <div className='cards-usos'>
                    <img src='/assets/usos/construccion.png' alt='usos1' className='img-card-usos'/>
                    <h4 className='title-cards-usos'>Construcción</h4>
                </div>

                <div className='cards-usos'>
                    <img src='/assets/usos/petroleo.png' alt='usos2' className='img-card-usos'/>
                    <h4 className='title-cards-usos'>Petróleo</h4>
                </div>

                <div className='cards-usos'>
                   <a href='http://www.rubicat.com.ar' target='_blank' rel="noreferrer noopener"><img src='/assets/usos/arenaAglutinante.png' alt='usos3' className='img-card-usos'/>
                    <h4 className='title-cards-usos'>Arena sanitaria</h4></a>
                </div>

                <div className='cards-usos'>
                    <img src='/assets/usos/makeup.png' alt='usos4' className='img-card-usos'/>
                    <h3 className='title-cards-usos'>Cosmética</h3>
                </div> 

                <div className='cards-usos'>
                    <img src='/assets/usos/alimento.png' alt='usos4' className='img-card-usos'/>
                    <h4 className='title-cards-usos'>Alimento</h4>
                </div>



                
            </div>
            </div>
        </section>
    );
};

export default UsosBentonita;
