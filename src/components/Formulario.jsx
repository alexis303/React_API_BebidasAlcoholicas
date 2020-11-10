import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import {RecetasContext} from '../context/RecetasContext'


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState ({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext); 
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext )

    // funcion para leer los contenidos 

    const obtenerDatosReceta = e => {

        guardarBusqueda({
            ...busqueda,
            [e.target.name ] : e.target.value
        })
    }

    return (  
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-2" >
                <div className="col-md-4 mt-2">
                    <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por ingrediente :3"
                        onChange={obtenerDatosReceta}
                    
                    />
                </div>
                <div className="col-md-4 mt-2">
                    <select 
                        onChange={obtenerDatosReceta}
                        name="categoria" 
                        className="form-control"
                    >
                        <option value="">-- Selecciona Categoría --</option>

                        {categorias.map(categoria => (

                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}

                            >{categoria.strCategory}</option>
                        ))}
                    </select>

                </div>

                <div className="col-md-4 mt-2">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary" 
                        value="Buscar recetas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;