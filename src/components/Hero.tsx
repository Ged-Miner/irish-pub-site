export default function Hero() {
  return (
    <section
      className="h-screen py-20 px-4 flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('https://images.unsplash.com/photo-1593887937265-2a09787dcc19')"
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-50 mb-6">
          Scéal eile
        </h1>
        <h2 className="text-1xl md:text-3xl font-thin text-slate-50 mb-6">
          Your Local Pub in Ryogoku
        </h2>
      </div>
    </section>
  )
}
