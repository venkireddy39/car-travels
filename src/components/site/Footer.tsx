export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-neon shadow-neon grid place-items-center">
              <span className="font-display font-bold text-primary-foreground">AK</span>
            </div>
            <span className="font-display font-bold text-lg">
              AK <span className="text-gradient">TRAVELS</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Premium self-drive cars and curated road trips across India. Available 24×7.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#fleet" className="hover:text-primary">Fleet</a></li>
            <li><a href="#destinations" className="hover:text-primary">Destinations</a></li>
            <li><a href="#packages" className="hover:text-primary">Packages</a></li>
            <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>📞 95053 96056</li>
            <li>✉ hello@aktravels.in</li>
            <li>📍 Hyderabad, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AK Travels · Drive the extraordinary.
      </div>
    </footer>
  );
}
