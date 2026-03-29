import { motion } from "framer-motion";
import { Heart, Shield, Users, Utensils } from "lucide-react";

const values = [
  { icon: Heart, title: "Traditional Recipes", desc: "Recipes passed down through generations from the Godavari districts of Andhra Pradesh." },
  { icon: Shield, title: "Modern Hygiene", desc: "State-of-the-art kitchen with strict quality control and hygiene standards." },
  { icon: Users, title: "Custom Orders", desc: "Special orders for weddings, festivals, and celebrations tailored to your needs." },
  { icon: Utensils, title: "Fresh & Homemade", desc: "Every sweet is made fresh daily using premium, pure ingredients." },
];

const About = () => (
  <div className="min-h-screen pt-24 relative">
    <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/bg-about.jpg')" }} />
    <div className="fixed inset-0 -z-10 bg-background/85 backdrop-blur-sm" />
    {/* Hero */}
    <section className="section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
            About <span className="text-gradient">Sri Ganesh Sweets</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Sri Ganesh Sweets specializes in authentic Andhra sweets from the Godavari districts.
            We bring the rich culinary heritage of coastal Andhra to Hyderabad with love and dedication.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold mb-6">A Legacy of Taste</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a passion for preserving the authentic flavors of Andhra Pradesh,
                Sri Ganesh Sweets has become a beloved name in Chanda Nagar, Hyderabad.
              </p>
              <p>
                Our sweets are crafted using time-honored recipes from the Godavari region,
                where every ingredient is carefully selected and every sweet is made with love.
                From the iconic Pootharekulu to the beloved Kaju Katli, each product carries
                the essence of our heritage.
              </p>
              <p>
                We believe in combining traditional taste with modern hygiene practices,
                ensuring that every bite is not just delicious but also safe and pure.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="font-display text-4xl font-bold text-primary">SG</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Sai Ganesh</h3>
            <p className="text-muted-foreground text-sm mb-4">Founder & Chief Sweet Maker</p>
            <p className="text-muted-foreground text-sm italic">
              "Our mission is to bring the authentic taste of Godavari sweets to every household,
              made with the same love and purity as our grandmothers' kitchens."
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">What Sets Us Apart</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
