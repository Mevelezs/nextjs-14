import Link from "next/link";


export  function Header() {
  return (
    <header className="w-[60%]">
      <nav className="w-[100%]">
        <ul className="flex justify-around items-center mb-8 text-emerald-600">
          <Link href="/" >Home</Link>
          <Link href="/store" >Store</Link>
        </ul>
      </nav>
    </header>
  );
}
