import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { Footer } from "@/components/footer"
import { SearchMenu } from "@/components/search-menu"

const menuData = {
  dagensLunch: {
    title: "Dagens Lunch",
    items: [
      { id: "dl1", name: "Kyckling med cashewnötter + ris", price: "89kr / 79kr" },
      { id: "dl2", name: "Nötkött med broccoli + ris", price: "95kr / 85kr" },
      { id: "dl3", name: "Fläsk med söttsur sås + ris", price: "89kr / 79kr" },
      { id: "dl4", name: "Tofu med grönsaker + ris", price: "85kr / 75kr" },
      { id: "dl5", name: "Räkor med curry + ris", price: "99kr / 89kr" },
      { id: "dl6", name: "Kyckling Teriyaki + ris", price: "89kr / 79kr" },
      { id: "dl7", name: "Mongolisk nötkött + ris", price: "99kr / 89kr" },
      { id: "dl8", name: "Fläsk med bambuskott + ris", price: "89kr / 79kr" },
    ],
  },
  forratter: {
    title: "Förrätter",
    items: [
      { id: "f1", name: "Grönsakssoppa", price: "68kr / 62kr" },
      { id: "f2", name: "Kyckling & champinjonsoppa", price: "82kr / 72kr" },
      { id: "f3", name: "Vårrullar (2 st)", price: "82kr / 72kr" },
      { id: "f4", name: "Wan-Ton soppa", price: "89kr / 82kr" },
      { id: "f5", name: "Pekingsoppa 'sölsur, stark'", price: "89kr / 82kr" },
      { id: "f6", name: "Räksallad", price: "129kr / 116kr" },
      { id: "f7", name: "Scampi soppa med chili & limeblad 'Tom Yaam Goong'", price: "149kr / 130kr" },
      { id: "f8", name: "Kycklingssoppa med chili & limeblad 'Tom Yaam Gai'", price: "139kr / 120kr" },
      { id: "f9", name: "Friterade räkor (6 st)", price: "95kr / 85kr" },
      { id: "f10", name: "Kinesiska dumplings (6 st)", price: "89kr / 79kr" },
      { id: "f11", name: "Friterad kyckling med söttsur sås", price: "92kr / 82kr" },
      { id: "f12", name: "Kalla nudlar med sesamsås", price: "75kr / 65kr" },
    ],
  },
  kyckling: {
    title: "Kyckling",
    items: [
      { id: "k1", name: "Kyckling med cashewnötter", price: "165kr / 145kr" },
      { id: "k2", name: "Kyckling med bambuskott & svamp", price: "165kr / 145kr" },
      { id: "k3", name: "Kyckling med ananas", price: "165kr / 145kr" },
      { id: "k4", name: "Kyckling Kung Pao (stark)", price: "165kr / 145kr" },
      { id: "k5", name: "Kyckling med curry (stark)", price: "165kr / 145kr" },
      { id: "k6", name: "Kyckling med ingefära & lök", price: "165kr / 145kr" },
      { id: "k7", name: "Kyckling med söttsur sås", price: "165kr / 145kr" },
      { id: "k8", name: "Kyckling Teriyaki", price: "165kr / 145kr" },
      { id: "k9", name: "Kyckling med mandel", price: "165kr / 145kr" },
      { id: "k10", name: "Kyckling med paprika & lök", price: "165kr / 145kr" },
      { id: "k11", name: "Kyckling med svartbönsås", price: "165kr / 145kr" },
      { id: "k12", name: "Friterad kyckling med citron", price: "175kr / 155kr" },
      { id: "k13", name: "Kyckling med chili & vitlök (stark)", price: "165kr / 145kr" },
      { id: "k14", name: "Kyckling med broccoli", price: "165kr / 145kr" },
    ],
  },
  nötkött: {
    title: "Nötkött",
    items: [
      { id: "n1", name: "Nötkött med bambuskott & svamp", price: "175kr / 155kr" },
      { id: "n2", name: "Nötkött med broccoli", price: "175kr / 155kr" },
      { id: "n3", name: "Nötkött med lök", price: "175kr / 155kr" },
      { id: "n4", name: "Nötkött med ingefära & lök", price: "175kr / 155kr" },
      { id: "n5", name: "Nötkött med curry (stark)", price: "175kr / 155kr" },
      { id: "n6", name: "Mongolisk nötkött (stark)", price: "185kr / 165kr" },
      { id: "n7", name: "Nötkött med paprika & lök", price: "175kr / 155kr" },
      { id: "n8", name: "Nötkött med svartbönsås", price: "175kr / 155kr" },
      { id: "n9", name: "Nötkött med ostron sås", price: "175kr / 155kr" },
      { id: "n10", name: "Nötkött med chili & vitlök (stark)", price: "175kr / 155kr" },
      { id: "n11", name: "Szechuan nötkött (mycket stark)", price: "185kr / 165kr" },
    ],
  },
  fläsk: {
    title: "Fläsk",
    items: [
      { id: "fl1", name: "Fläsk med bambuskott & svamp", price: "165kr / 145kr" },
      { id: "fl2", name: "Fläsk med söttsur sås", price: "165kr / 145kr" },
      { id: "fl3", name: "Fläsk med curry (stark)", price: "165kr / 145kr" },
      { id: "fl4", name: "Char Siu - Kinesisk BBQ fläsk", price: "175kr / 155kr" },
      { id: "fl5", name: "Fläsk med ananas", price: "165kr / 145kr" },
      { id: "fl6", name: "Fläsk med paprika & lök", price: "165kr / 145kr" },
      { id: "fl7", name: "Fläsk med ingefära & lök", price: "165kr / 145kr" },
      { id: "fl8", name: "Fläsk med svartbönsås", price: "165kr / 145kr" },
      { id: "fl9", name: "Szechuan fläsk (stark)", price: "175kr / 155kr" },
    ],
  },
  räkor: {
    title: "Räkor & Skaldjur",
    items: [
      { id: "r1", name: "Räkor med cashewnötter", price: "185kr / 165kr" },
      { id: "r2", name: "Räkor med bambuskott & svamp", price: "185kr / 165kr" },
      { id: "r3", name: "Räkor med curry (stark)", price: "185kr / 165kr" },
      { id: "r4", name: "Räkor med vitlök & chili (stark)", price: "185kr / 165kr" },
      { id: "r5", name: "Scampi med vitlök & chili", price: "195kr / 175kr" },
      { id: "r6", name: "Räkor med ananas", price: "185kr / 165kr" },
      { id: "r7", name: "Räkor med söttsur sås", price: "185kr / 165kr" },
      { id: "r8", name: "Räkor med paprika & lök", price: "185kr / 165kr" },
      { id: "r9", name: "Friterade räkor med mandel", price: "195kr / 175kr" },
      { id: "r10", name: "Szechuan räkor (stark)", price: "195kr / 175kr" },
    ],
  },
  vegetariskt: {
    title: "Vegetariskt",
    items: [
      { id: "v1", name: "Ma Po Tofu (stark)", price: "155kr / 135kr" },
      { id: "v2", name: "Tofu med bambuskott & svamp", price: "155kr / 135kr" },
      { id: "v3", name: "Tofu med curry (stark)", price: "155kr / 135kr" },
      { id: "v4", name: "Blandade grönsaker", price: "145kr / 125kr" },
      { id: "v5", name: "Broccoli med vitlök", price: "145kr / 125kr" },
      { id: "v6", name: "Aubergine i söttsur sås", price: "155kr / 135kr" },
      { id: "v7", name: "Tofu med söttsur sås", price: "155kr / 135kr" },
      { id: "v8", name: "Tofu med svartbönsås", price: "155kr / 135kr" },
      { id: "v9", name: "Szechuan tofu (stark)", price: "155kr / 135kr" },
      { id: "v10", name: "Vegetariska vårrullar (4 st)", price: "135kr / 115kr" },
      { id: "v11", name: "Friterad tofu med mandel", price: "165kr / 145kr" },
      { id: "v12", name: "Kinesisk kål med svamp", price: "145kr / 125kr" },
    ],
  },
  nudlar: {
    title: "Nudlar & Ris",
    items: [
      { id: "nu1", name: "Stekt ris med ägg", price: "125kr / 105kr" },
      { id: "nu2", name: "Stekt ris med kyckling", price: "145kr / 125kr" },
      { id: "nu3", name: "Stekt ris med räkor", price: "155kr / 135kr" },
      { id: "nu4", name: "Stekt ris med fläsk", price: "145kr / 125kr" },
      { id: "nu5", name: "Singapore nudlar (stark)", price: "165kr / 145kr" },
      { id: "nu6", name: "Lo Mein nudlar med kyckling", price: "155kr / 135kr" },
      { id: "nu7", name: "Lo Mein nudlar med nötkött", price: "165kr / 145kr" },
      { id: "nu8", name: "Pad Thai nudlar", price: "155kr / 135kr" },
      { id: "nu9", name: "Chow Mein nudlar", price: "145kr / 125kr" },
      { id: "nu10", name: "Risnudlar med räkor", price: "165kr / 145kr" },
      { id: "nu11", name: "Udon nudlar med grönsaker", price: "145kr / 125kr" },
      { id: "nu12", name: "Jasminris", price: "35kr / 25kr" },
    ],
  },
  efterrätter: {
    title: "Efterrätter",
    items: [
      { id: "e1", name: "Friterad glass med honung", price: "65kr / 55kr" },
      { id: "e2", name: "Sesamboll", price: "55kr / 45kr" },
      { id: "e3", name: "Banan i deg", price: "65kr / 55kr" },
      { id: "e4", name: "Ananas med glass", price: "65kr / 55kr" },
      { id: "e5", name: "Lychee med glass", price: "65kr / 55kr" },
      { id: "e6", name: "Kinesisk mandeltårta", price: "75kr / 65kr" },
      { id: "e7", name: "Mango pudding", price: "55kr / 45kr" },
      { id: "e8", name: "Fortune cookies (3 st)", price: "35kr / 25kr" },
    ],
  },
  drycker: {
    title: "Drycker",
    items: [
      { id: "d1", name: "Kinesiskt te (pot)", price: "45kr / 35kr" },
      { id: "d2", name: "Jasmin te", price: "45kr / 35kr" },
      { id: "d3", name: "Oolong te", price: "45kr / 35kr" },
      { id: "d4", name: "Coca Cola", price: "35kr / 25kr" },
      { id: "d5", name: "Sprite", price: "35kr / 25kr" },
      { id: "d6", name: "Fanta", price: "35kr / 25kr" },
      { id: "d7", name: "Vatten", price: "25kr / 20kr" },
      { id: "d8", name: "Lychee juice", price: "45kr / 35kr" },
      { id: "d9", name: "Mango lassi", price: "55kr / 45kr" },
      { id: "d10", name: "Thai iced tea", price: "55kr / 45kr" },
      { id: "d11", name: "Öl (Tsingtao)", price: "65kr / 55kr" },
      { id: "d12", name: "Sake (varm)", price: "85kr / 75kr" },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <section id="erbjudanden" className="container mx-auto px-4 py-16">
        <div className="bg-red-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialerbjudanden</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Dagens Lunch</h4>
              <p className="text-gray-600 mb-2">Måndag - Fredag 11:00 - 15:00</p>
              <p className="text-red-600 font-bold text-xl">Från 79kr</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Take Away</h4>
              <p className="text-gray-600 mb-2">10% rabatt på alla beställningar</p>
              <p className="text-red-600 font-bold text-xl">Ring & Beställ</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 id="meny" className="text-4xl font-bold text-gray-900 mb-4">
            Vår Meny
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upptäck autentiska kinesiska smaker tillagade med färska ingredienser och traditionella recept. Alla priser
            visas som Pris / Takeaway pris.
          </p>
        </div>

        <SearchMenu menuData={menuData} />

        <div className="grid gap-12">
          <section id="lunch">
            <MenuSection title={menuData.dagensLunch.title} items={menuData.dagensLunch.items} />
          </section>

          {Object.entries(menuData)
            .slice(1)
            .map(([key, section]) => (
              <MenuSection key={key} title={section.title} items={section.items} />
            ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
