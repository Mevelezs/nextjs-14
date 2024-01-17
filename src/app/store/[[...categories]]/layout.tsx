export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>
        <h1>El envolvedor</h1>
      </nav>
      {children}
    </main>
  )
};
