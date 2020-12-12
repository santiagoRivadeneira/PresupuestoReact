import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

   //2definir state
const [cantidad, guardarCantidad] = useState(0);
const [error, guardarError] = useState(false);


const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10));
}

//3funcion que lle el presupuesto
const agregarPresupuesto = e => {
    e.preventDefault();

    //4Validar
    if(cantidad < 1 || isNaN(cantidad )){
        guardarError(true);
        return;
    }


    //que se hace si se pasa la validacion
    guardarError(false);
    //guardamos en la funcion la cantidad;
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad)
    //ocultamos el panel de ingreso de capital
    actualizarPregunta(false);

}


    return ( 
        <Fragment>
                <h2>Coloca Tu Presupuesto</h2>
                    {error ? <Error mensaje="El Presupuesto es Incorrecto"/>  
                    : null}
                <form
                onSubmit={agregarPresupuesto}
                >
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Coloca tu presupueso"
                        onChange={definirPresupuesto}
                    />

                    <input 
                      type="submit"
                      className="button-primary u-full-width"
                      value="Definir presupuesto"
                    />
                </form>
        </Fragment>
    );
}
//documentacion

Pregunta.propTypes ={
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}

 
export default Pregunta;

