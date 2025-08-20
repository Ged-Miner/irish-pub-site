interface AboutProps {
  features: {
    title: string
    description: string
    icon: string
  }[]
}

export default function About({ features }: AboutProps) {
  return (
    <section className="py-16 px-4 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-950 mb-4">
          About Us
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Hello! We are Yuki & Taka. Feel at home in our family-owned Irish pub,
          where great pints, warm smiles, and good craic await!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
