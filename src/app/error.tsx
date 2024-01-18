"use client"

import Image from "next/image";


interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  console.error(error.message);
  return (
    <div className='text-gray-100 flex justify-center items-center'>
      <Image
        width={500}
        height={500}
        src='/images/error.png'
        alt='Error'
        className=""
      />
      <p>Ha ocurrido un error</p>
      <button className="m-8" onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}
