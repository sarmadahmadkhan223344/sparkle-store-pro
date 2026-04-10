const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-heading font-bold text-gradient mb-4">LUXEMART</h3>
          <p className="text-sm text-muted-foreground">Premium shopping experience with curated collections.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>New Arrivals</li><li>Best Sellers</li><li>Sale</li><li>Collections</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Contact Us</li><li>FAQs</li><li>Shipping</li><li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li><li>Careers</li><li>Press</li><li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
        © 2024 LuxeMart. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
