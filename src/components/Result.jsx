import { useCallback, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import {MARCAS, PLANES} from '../constants'

function Result() {
  const {result, data} = useCotizador()
  const {marca, plan, year} = data
  const yearRef = useRef(year)

  //Aplicando el destrucción [] ya obtenemos ese objeto unico
  const [nameMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [result])
  const [namePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [result]) 

  if(result===0) return null

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
      <h2 className='text-gray-700 font-black text-3xl'>Resumen</h2>
      <p className='my-2'>
        <span className='font-bold'>Marca: </span>{nameMarca.nombre}
      </p>      
      <p className='my-2'>
        <span className='font-bold'>Plan: </span>{namePlan.nombre}
      </p>
      <p className='my-2'>
        <span className='font-bold'>Año: </span>{yearRef.current}
      </p>
      <p className='my-2 text-xl'>
        <span className='font-bold'>Cotización: </span>{result}
      </p>      
    </div>
  )
}

export default Result