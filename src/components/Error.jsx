import useCotizador from "../hooks/useCotizador"

const Error = () => {
  const {error} = useCotizador()
  return (
    <div className="text-red-500">
      {error}
    </div>
  )
}

export default Error
