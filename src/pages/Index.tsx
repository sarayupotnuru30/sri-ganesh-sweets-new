// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShoppingBag, BookOpen, MessageCircle, Star, Sparkles, Award, Leaf } from "lucide-react";
// import ProductCard from "@/components/ProductCard";
// import { products } from "@/data/products";

// const featuredProducts = products.filter((p) =>
//   ["kaju-katli", "mysore-pak", "mixture", "motichoor-laddu", "pootharekulu", "dry-fruits-laddu"].includes(p.id)
// );

// const features = [
//   { icon: Sparkles, title: "Fresh Daily", desc: "Made fresh every morning with traditional recipes" },
//   { icon: Award, title: "Premium Quality", desc: "Finest ingredients sourced from trusted suppliers" },
//   { icon: Leaf, title: "Pure & Natural", desc: "No artificial colors or preservatives" },
// ];

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/bg-home.jpg')" }}
//         />
//         <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

//         <div className="relative z-10 container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
//               <Sparkles className="w-4 h-4" /> Authentic Andhra Sweets
//             </span>
//             <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
//               Experience Authentic <span className="text-gradient">Sweets</span>
//               <br />
//               with a Modern Touch
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
//               Fresh • Premium • Traditional Taste
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link
//                 to="/products"
//                 className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all"
//               >
//                 <ShoppingBag className="w-4 h-4" /> Shop Now
//               </Link>
//               <Link
//                 to="/products"
//                 className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:bg-foreground/5 transition-all"
//               >
//                 <BookOpen className="w-4 h-4" /> View Menu
//               </Link>
//               <a
//                 href="https://wa.me/919494244949?text=Hi%20Sri%20Ganesh%20Sweets!%20I'd%20like%20to%20place%20an%20order."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-green-600 text-background px-8 py-3.5 rounded-full font-medium text-sm hover:bg-green-700 transition-all"
//               >
//                 <MessageCircle className="w-4 h-4" /> WhatsApp Order
//               </a>
//             </div>
//           </motion.div>

//           {/* Floating decoration */}
//           <motion.div
//             animate={{ y: [-10, 10, -10] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2"
//           >
//             <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
//               <motion.div
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="w-1.5 h-1.5 rounded-full bg-primary"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="section-padding bg-secondary/50">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((f, i) => (
//               <motion.div
//                 key={f.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className="glass-card rounded-2xl p-8 text-center hover-glow"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                   <f.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="font-display font-semibold text-xl mb-2">{f.title}</h3>
//                 <p className="text-muted-foreground text-sm">{f.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="section-padding">
//         <div className="container mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Specialties</span>
//             <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Products</h2>
//             <p className="text-muted-foreground max-w-lg mx-auto">
//               Handpicked favorites loved by our customers
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredProducts.map((product, i) => (
//               <ProductCard key={product.id} product={product} index={i} />
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link
//               to="/products"
//               className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-all"
//             >
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
//         <div className="container mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="font-display text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { name: "Priya R.", text: "Best Kaju Katli in Hyderabad! Tastes like homemade.", rating: 5 },
//               { name: "Venkat S.", text: "Their Pootharekulu is absolutely divine. Authentic Godavari taste!", rating: 5 },
//               { name: "Lakshmi K.", text: "Fresh, pure, and delicious. My family's favorite sweet shop!", rating: 5 },
//             ].map((t, i) => (
//               <motion.div
//                 key={t.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass-card rounded-2xl p-6"
//               >
//                 <div className="flex gap-1 mb-3">
//                   {Array.from({ length: t.rating }).map((_, j) => (
//                     <Star key={j} className="w-4 h-4 fill-primary text-primary" />
//                   ))}
//                 </div>
//                 <p className="text-foreground mb-4 italic">"{t.text}"</p>
//                 <p className="text-sm font-medium text-muted-foreground">— {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding">
//         <div className="container mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
//             style={{ background: "var(--gradient-accent)" }}
//           >
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
//               Ready to Order?
//             </h2>
//             <p className="text-background/80 max-w-md mx-auto mb-8">
//               Place your order via WhatsApp and get fresh sweets delivered to your doorstep.
//             </p>
//             <a
//               href="https://wa.me/919494244949?text=Hi%20Sri%20Ganesh%20Sweets!%20I'd%20like%20to%20place%20an%20order."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all"
//             >
//               <MessageCircle className="w-4 h-4" /> Order on WhatsApp
//             </a>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Star, Sparkles, Award, Leaf, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      {/* --- MODERN HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3" /> Since 1994 • Authentic Andhra
                </div>
                
                {/* SINGLE LINE HEADLINE: Removed <br /> and optimized size */}
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 whitespace-nowrap">
                  Tradition <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Redefined.</span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
                  Experience the soul of Godavari sweets. Handcrafted with 
                  <span className="font-semibold text-slate-900"> pure ghee </span> 
                  and heritage recipes passed down through generations.
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* FOCUSED CTA: Removed Explore Other button */}
                  <Link
                    to="/products"
                    className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-xl font-bold transition-all hover:bg-primary hover:shadow-2xl hover:-translate-y-1"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Shop Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                         <img 
                          src={`https://ui-avatars.com/api/?name=User+${i}&background=random&color=fff`} 
                          alt="Customer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                      +2k
                    </div>
                  </div>
                  <p>Join <span className="font-bold text-slate-900">2,000+</span> happy customers this month</p>
                </div>
              </motion.div>
            </div>

            {/* Right Visuals */}
            <div className="flex-1 relative w-full lg:w-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main Image Card: Clean and minimalist */}
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/bg-home.jpg" 
                    alt="Traditional Sweets" 
                    className="w-full h-[450px] lg:h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-2.5 rounded-xl text-orange-600">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900">4.9/5</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Avg Rating</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <f.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCTS --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3 text-left">The Collection</h2>
              <h3 className="text-4xl font-bold text-slate-900 text-left leading-tight">Handpicked Best-Sellers</h3>
            </div>
            <Link to="/products" className="text-slate-900 font-bold flex items-center gap-2 hover:text-primary transition-colors border-b-2 border-slate-900 hover:border-primary pb-1">
              Browse Entire Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Trusted by Sweet Lovers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya R.", text: "Best Kaju Katli in Hyderabad! Tastes like homemade.", rating: 5 },
              { name: "Venkat S.", text: "Their Pootharekulu is absolutely divine. Authentic Godavari taste!", rating: 5 },
              { name: "Lakshmi K.", text: "Fresh, pure, and delicious. My family's favorite sweet shop!", rating: 5 },
            ].map((t, i) => (
              <div key={t.name} className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed italic">"{t.text}"</p>
                <p className="font-bold text-white">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="relative rounded-[3rem] bg-primary p-12 md:p-24 overflow-hidden text-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Experience the sweetness <br className="hidden md:block"/> at your doorstep.</h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Ready for a taste of tradition? Order now via WhatsApp for express delivery.
              </p>
              <a
                href="https://wa.me/919494244949"
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black shadow-2xl hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Index;