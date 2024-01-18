import Image from "next/image"
import Link from "next/link"



export default function NotFound () {
  return (
    <div className='text-teal-600 flex justify-center items-center'>
      <h1>404 not found</h1>
      <Image width={500} height={500} src='/images/404.png' alt='not found' />
      <Link href='/' >Go back </Link>
    </div>
  );
}
