import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/placeholder.svg?height=400&width=800')`,
        }}
      ></div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Välkommen till Mora China</h1>
          <p className="text-xl mb-8 leading-relaxed">
            Upplev äkta kinesiska smaker i hjärtat av Mora. Vi serverar traditionella rätter tillagade med kärlek och de
            finaste ingredienserna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Se Vår Meny
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Beställ Takeaway
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
