import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, BookOpen, MessageCircle, Star, Sparkles, Award, Leaf } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featuredProducts = products.filter((p) =>
  ["kaju-katli", "mysore-pak", "mixture", "motichoor-laddu", "pootharekulu", "dry-fruits-laddu"].includes(p.id)
);

const features = [
  { icon: Sparkles, title: "Fresh Daily", desc: "Made fresh every morning with traditional recipes" },
  { icon: Award, title: "Premium Quality", desc: "Finest ingredients sourced from trusted suppliers" },
  { icon: Leaf, title: "Pure & Natural", desc: "No artificial colors or preservatives" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/5" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.2) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Authentic Andhra Sweets
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Experience Authentic
              <br />
              <span className="text-gradient">Sweets</span> with a
              <br />
              Modern Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
              Fresh • Premium • Traditional Taste
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all"
              >
                <ShoppingBag className="w-4 h-4" /> Shop Now
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:bg-foreground/5 transition-all"
              >
                <BookOpen className="w-4 h-4" /> View Menu
              </Link>
              <a
                href="https://wa.me/919494244949?text=Hi%20Sri%20Ganesh%20Sweets!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-background px-8 py-3.5 rounded-full font-medium text-sm hover:bg-green-700 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Order
              </a>
            </div>
          </motion.div>

          {/* Floating decoration */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl p-8 text-center hover-glow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Specialties</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Handpicked favorites loved by our customers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Priya R.", text: "Best Kaju Katli in Hyderabad! Tastes like homemade.", rating: 5 },
              { name: "Venkat S.", text: "Their Pootharekulu is absolutely divine. Authentic Godavari taste!", rating: 5 },
              { name: "Lakshmi K.", text: "Fresh, pure, and delicious. My family's favorite sweet shop!", rating: 5 },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{t.text}"</p>
                <p className="text-sm font-medium text-muted-foreground">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
            style={{ background: "var(--gradient-accent)" }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
              Ready to Order?
            </h2>
            <p className="text-background/80 max-w-md mx-auto mb-8">
              Place your order via WhatsApp and get fresh sweets delivered to your doorstep.
            </p>
            <a
              href="https://wa.me/919494244949?text=Hi%20Sri%20Ganesh%20Sweets!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
