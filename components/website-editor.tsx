"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save } from "lucide-react"

export function WebsiteEditor() {
  const [websiteData, setWebsiteData] = useState({
    hero: {
      title: "Välkommen till Mora China",
      subtitle:
        "Upplev äkta kinesiska smaker i hjärtat av Mora. Vi serverar traditionella rätter tillagade med kärlek och de finaste ingredienserna.",
    },
    contact: {
      phone: "0250-123 45",
      address: "Storgatan 123, 792 30 Mora",
      email: "info@morachina.se",
    },
    hours: {
      weekdays: "11:00 - 21:00",
      weekends: "11:00 - 22:00",
      sunday: "12:00 - 21:00",
    },
    about: {
      text: "Sedan 1995 har vi serverat autentisk kinesisk mat till Mora och omnejd. Vi är stolta över att använda färska ingredienser och traditionella tillagningsmetoder för att ge dig den bästa smakupplevelsen.",
    },
  })

  const handleSave = (section: string) => {
    // Here you would typically save to a database
    alert(`${section} har sparats!`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Webbplats Editor</CardTitle>
          <CardDescription>Redigera innehållet på din webbplats</CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="hero" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero">Hero Sektion</TabsTrigger>
          <TabsTrigger value="contact">Kontakt</TabsTrigger>
          <TabsTrigger value="hours">Öppettider</TabsTrigger>
          <TabsTrigger value="about">Om Oss</TabsTrigger>
        </TabsList>

        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle>Hero Sektion</CardTitle>
              <CardDescription>Redigera huvudtexten på startsidan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="hero-title">Huvudrubrik</Label>
                <Input
                  id="hero-title"
                  value={websiteData.hero.title}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      hero: { ...websiteData.hero, title: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="hero-subtitle">Undertext</Label>
                <Textarea
                  id="hero-subtitle"
                  value={websiteData.hero.subtitle}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      hero: { ...websiteData.hero, subtitle: e.target.value },
                    })
                  }
                  rows={4}
                />
              </div>
              <Button onClick={() => handleSave("Hero sektion")}>
                <Save className="h-4 w-4 mr-2" />
                Spara ändringar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Kontaktinformation</CardTitle>
              <CardDescription>Uppdatera kontaktuppgifter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input
                  id="phone"
                  value={websiteData.contact.phone}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      contact: { ...websiteData.contact, phone: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="address">Adress</Label>
                <Input
                  id="address"
                  value={websiteData.contact.address}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      contact: { ...websiteData.contact, address: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  value={websiteData.contact.email}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      contact: { ...websiteData.contact, email: e.target.value },
                    })
                  }
                />
              </div>
              <Button onClick={() => handleSave("Kontaktinformation")}>
                <Save className="h-4 w-4 mr-2" />
                Spara ändringar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>Öppettider</CardTitle>
              <CardDescription>Uppdatera restaurangens öppettider</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="weekdays">Måndag - Torsdag</Label>
                <Input
                  id="weekdays"
                  value={websiteData.hours.weekdays}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      hours: { ...websiteData.hours, weekdays: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="weekends">Fredag - Lördag</Label>
                <Input
                  id="weekends"
                  value={websiteData.hours.weekends}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      hours: { ...websiteData.hours, weekends: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="sunday">Söndag</Label>
                <Input
                  id="sunday"
                  value={websiteData.hours.sunday}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      hours: { ...websiteData.hours, sunday: e.target.value },
                    })
                  }
                />
              </div>
              <Button onClick={() => handleSave("Öppettider")}>
                <Save className="h-4 w-4 mr-2" />
                Spara ändringar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>Om Oss</CardTitle>
              <CardDescription>Redigera "Om oss" texten</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="about-text">Om oss text</Label>
                <Textarea
                  id="about-text"
                  value={websiteData.about.text}
                  onChange={(e) =>
                    setWebsiteData({
                      ...websiteData,
                      about: { ...websiteData.about, text: e.target.value },
                    })
                  }
                  rows={6}
                />
              </div>
              <Button onClick={() => handleSave("Om oss")}>
                <Save className="h-4 w-4 mr-2" />
                Spara ändringar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
