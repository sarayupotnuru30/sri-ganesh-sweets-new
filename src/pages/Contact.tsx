// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

// const contactInfo = [
//   { icon: Phone, label: "Phone", value: "9494244949", href: "tel:9494244949" },
//   { icon: Mail, label: "Email", value: "info.ganeshsweets@gmail.com", href: "mailto:info.ganeshsweets@gmail.com" },
//   { icon: MapPin, label: "Address", value: "3-64/2 116, MMTS Station Road, near old Police Station, Gangaram, Chanda Nagar, Hyderabad, Telangana 500050" },
//   { icon: Clock, label: "Business Hours", value: "9 AM – 10 PM (Monday – Sunday)" },
// ];

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", phone: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const msg = `Hi Sri Ganesh Sweets!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`;
//     window.open(`https://wa.me/919494244949?text=${encodeURIComponent(msg)}`, "_blank");
//   };

//   return (
//     <div className="min-h-screen pt-24 relative">
//       <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/bg-contact.jpg')" }} />
//       <div className="fixed inset-0 -z-10 bg-background/85 backdrop-blur-sm" />
//       <section className="section-padding">
//         <div className="container mx-auto">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
//             <span className="text-primary text-sm font-medium uppercase tracking-widest">Get in Touch</span>
//             <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
//               Contact <span className="text-gradient">Us</span>
//             </h1>
//             <p className="text-muted-foreground max-w-lg mx-auto">
//               We'd love to hear from you. Reach out for orders, custom requests, or any inquiries.
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-10">
//             {/* Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
//                   <input
//                     type="text"
//                     required
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
//                   <input
//                     type="tel"
//                     required
//                     value={form.phone}
//                     onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
//                   <textarea
//                     required
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
//                     placeholder="How can we help you?"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-[1.02] transition-all"
//                 >
//                   <Send className="w-4 h-4" /> Send via WhatsApp
//                 </button>
//               </form>
//             </motion.div>

//             {/* Info + Map */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <div className="glass-card rounded-2xl p-8 space-y-5">
//                 {contactInfo.map((c) => (
//                   <div key={c.label} className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
//                       <c.icon className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-foreground">{c.label}</p>
//                       {c.href ? (
//                         <a href={c.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                           {c.value}
//                         </a>
//                       ) : (
//                         <p className="text-sm text-muted-foreground">{c.value}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Map */}
//               <div className="rounded-2xl overflow-hidden shadow-lg">
//                 <iframe
//                   title="Sri Ganesh Sweets Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8!2d78.3188!3d17.4924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzMyLjYiTiA3OMKwMTknMDcuNyJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "9494244949", href: "tel:9494244949" },
  { icon: Mail, label: "Email", value: "info.ganeshsweets@gmail.com", href: "mailto:info.ganeshsweets@gmail.com" },
  { icon: MapPin, label: "Address", value: "3-64/2 116, MMTS Station Road, near old Police Station, Gangaram, Chanda Nagar, Hyderabad, Telangana 500050" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Sri Ganesh Sweets!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/919494244949?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 relative">
      <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/bg-contact.jpg')" }} />
      <div className="fixed inset-0 -z-10 bg-background/85 backdrop-blur-sm" />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We'd love to hear from you. Reach out for orders, custom requests, or any inquiries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5 shadow-xl">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* HIGHLIGHTED BUSINESS HOURS */}
              <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Clock className="w-24 h-24 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-white font-display text-xl font-bold">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-slate-400 text-sm">Monday — Sunday</span>
                      <span className="text-primary font-bold">9:00 AM — 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <p className="text-xs text-slate-400 italic">Open all days including public holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Contact Info */}
              <div className="glass-card rounded-2xl p-8 space-y-6 shadow-xl">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors block">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground leading-relaxed">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;