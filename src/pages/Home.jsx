import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home = () => {
  const featured = products.filter(p => p.badge).slice(0, 4);
  const trending = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-background/10 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-2 rounded-full mb-6 border border-background/20"
            >
              ✨ New Spring Collection 2024
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Discover Your
              <br />
              <span className="italic">Signature Style</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Curated collections of premium products designed for modern living. Free shipping on orders over $50.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products?category=fashion"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
              >
                Explore Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
            { icon: Shield, title: 'Secure Payment', desc: '100% protected checkout' },
            { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
          ].map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <perk.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{perk.title}</h3>
                <p className="text-xs text-muted-foreground">{perk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2">Shop by Category</h2>
          <p className="text-muted-foreground text-center mb-10">Find exactly what you're looking for</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products?category=${cat.id}`}
                className="glass-card-hover block p-4 text-center group"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-1">Handpicked just for you</p>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-hero rounded-2xl p-8 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Spring Sale — Up to 40% Off
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Limited time offer on our most popular items. Don't miss out!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Shop the Sale <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Trending */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2">Trending Now</h2>
        <p className="text-muted-foreground text-center mb-10">What everyone's loving right now</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trending.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
