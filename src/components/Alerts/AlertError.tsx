type ErrorFunc = {
    error: string 
}

const AlertError: React.FC<ErrorFunc>  = ({error}) => {
  return (
    <p className="bg-red-300 p-3 rounded-lg mb-4 w-full">
        {error}
    </p>
  )
}

export default AlertError