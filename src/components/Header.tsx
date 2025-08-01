interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header({ title, subtitle }: HeaderProps ) {
  return (
    <header className="bg-emerald-800 text-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">{subtitle}</p>
    </header>
  )
}
