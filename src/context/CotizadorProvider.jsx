import {useState, createContext } from "react";
import {getDiferenceBetweenYear, calculateBrand, calculatePlan, formateMount} from "../helpers"

const CotizadorContext = createContext()

//Provider: Donde se define el state, es la fuente de los datos
const CotizadorProvider = ({children}) => {
  const [data, setData] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  const [error, setError] = useState('')
  const [result, setResult] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleChangeData = e => {
    setData({
      ...data, 
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
     //base
     let result = 2000

     //Diferencia entre actual año y seleccionado
     const diference = getDiferenceBetweenYear(data.year)

     //Restar el 3% por cada año
     result -= ((diference * 3) * result) / 100

     //Europeo 30%
     //Americano 15%
     //Asiatico 5%
     result *= calculateBrand(data.marca)

     //Basico 20%
     //Completo 50%
     result *= calculatePlan(data.plan)
     result = formateMount(result)
     setLoading(true)

     setTimeout(() => {
      setResult(result)
      setLoading(false)
     }, 500);   
  };  


  return(
    <CotizadorContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        cotizarSeguro,
        result,
        loading
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext