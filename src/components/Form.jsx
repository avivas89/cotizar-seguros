import {MARCAS, YEARS, PLANES} from '../constants'
import Error from './Error'
import useCotizador from '../hooks/useCotizador'

const Form = () => {

  const {data, handleChangeData, error, setError, cotizarSeguro} = useCotizador()  

  const handleSubmit = (e) => {
    e.preventDefault()

    //validando form
    if(Object.values(data).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')
    cotizarSeguro()
  }

  return (
    <>
      {/* <button onClick={handleState}>Cambiar state</button> */}

      <form 
        onSubmit={handleSubmit}
      >
        <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
        <select 
          name="marca" 
          id="marca" 
          className="w-full p-3 bg-white border border-gray-200 focus:border-gray-300"
          onChange={e => handleChangeData(e)}
          value={data.id}
          >
          <option value="">--Seleccionar--</option>
          {MARCAS.map(marca => (
            <option
              key={marca.id} 
              value={marca.id}
            >
              {marca.nombre}
            </option>          
          ))}
        </select>
        <label htmlFor="years" className="block my-3 font-bold text-gray-400 uppercase">Años</label>
        <select 
          name="year" 
          id="marca" 
          className="w-full p-3 bg-white border border-gray-200 focus:border-gray-300"
          onChange={e => handleChangeData(e)}
          value={data.year}
          >
          <option value="">--Seleccionar--</option>
          {YEARS.map(year => (
            <option
              key={year} 
              value={year}
            >
              {year}
            </option>          
          ))}
        </select>
        <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>
        <div className="flex gap-3 items-center">
            {
              PLANES.map(plan => (                
                <div
                  key={plan.id}
                  className="flex items-center gap-2"
                >
                  <label htmlFor="">{plan.nombre}</label>
                  <input 
                    type="radio" 
                    name="plan" 
                    value={plan.id} 
                    onChange={e => handleChangeData(e)}
                  />
                </div>                
              ))
            }
        </div>
        <input type="submit" value="Consultar" className='w-full bg-indigo-500 hover:bg-indigo-800 text-white cursor-pointer transition-colors mt-5 py-3 rounded-md'/>
        {
          error && <Error/>
        }
      </form>
    </>
  )
}

export default Form