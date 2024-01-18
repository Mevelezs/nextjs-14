"use client"

interface ErrorProps {
  error: Error,
  reset: () => void
}

export default function error({ error, reset }: ErrorProps) {
  console.error(error.message);
  return (
    <div className="text-gray-100 flex flex-col justify-center items-center">
      <h1>:C</h1>
      <p>Ha ocurrido un error</p>
      <button  onClick={reset}>Intentar de nuevo</button>

    </div>
  )
}
