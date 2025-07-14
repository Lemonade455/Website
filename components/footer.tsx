import { Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Kontaktinformation</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span>0250-123 45</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>Storgatan 123, 792 30 Mora</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span>info@morachina.se</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Öppettider</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Måndag - Torsdag:</span>
                <span>11:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Fredag - Lördag:</span>
                <span>11:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Söndag:</span>
                <span>12:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Om Mora China</h3>
            <p className="text-gray-300 leading-relaxed">
              Sedan 1995 har vi serverat autentisk kinesisk mat till Mora och omnejd. Vi är stolta över att använda
              färska ingredienser och traditionella tillagningsmetoder för att ge dig den bästa smakupplevelsen.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mora China. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}
