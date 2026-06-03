import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { BookingForm } from "@/components/site/BookingForm";
import { Fleet } from "@/components/site/Fleet";
import { Destinations } from "@/components/site/Destinations";
import { Packages } from "@/components/site/Packages";
import { RouteMap } from "@/components/site/RouteMap";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AK Travels — Premium Self-Drive Cars & Road Trips" },
      { name: "description", content: "AK Travels offers premium self-drive cars and curated road trip packages across India. 24×7 service. Swift, Baleno, Nexon, Punch, Brezza, Innova, Thar and more." },
      { property: "og:title", content: "AK Travels — Drive the extraordinary" },
      { property: "og:description", content: "Premium self-drive cars and curated road trip packages across India. 24×7 service." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BookingForm />
      <Fleet />
      <Destinations />
      <Packages />
      <RouteMap />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
