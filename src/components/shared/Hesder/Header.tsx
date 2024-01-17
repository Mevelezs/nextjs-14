import Link from "next/link";


export  function Header() {
  return (
    <header className="w-80">
      <nav className="w-[100%]">
        <ul className="flex justify-between mb-8">
          <Link href="/" >Home</Link>
          <Link href="/store" >Store</Link>
        </ul>
      </nav>
    </header>
  );
}
