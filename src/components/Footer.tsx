// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, ArrowUp, Clock, Heart } from "lucide-react";

// const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="bg-foreground text-background">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src="/logo.png" alt="Sri Ganesh Sweets" className="h-10 w-10 object-contain" />
//               <div>
//                 <h3 className="font-display font-bold text-lg">Sri Ganesh</h3>
//                 <p className="text-xs tracking-widest uppercase opacity-60">Sweets</p>
//               </div>
//             </div>
//             <p className="text-sm opacity-70 leading-relaxed">
//               Authentic Andhra sweets from the heart of Godavari. Premium quality, traditional recipes, modern hygiene.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
//             <div className="flex flex-col gap-2">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/products", label: "Our Products" },
//                 { to: "/cart", label: "Cart" },
//                 { to: "/contact", label: "Contact" },
//               ].map((link) => (
//                 <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
//             <div className="flex flex-col gap-3 text-sm opacity-70">
//               <a href="tel:9494244949" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
//                 <Phone className="w-4 h-4 text-primary" /> 9494244949
//               </a>
//               <a href="mailto:info.ganeshsweets@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
//                 <Mail className="w-4 h-4 text-primary" /> info.ganeshsweets@gmail.com
//               </a>
//               <div className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                 <span>3-64/2 116, MMTS Station Road, Chanda Nagar, Hyderabad 500050</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 text-primary" /> 9 AM – 10 PM (Mon–Sun)
//               </div>
//             </div>
//           </div>

//           {/* WhatsApp */}
//           <div>
//             <h4 className="font-display font-semibold text-lg mb-4">Order Now</h4>
//             <p className="text-sm opacity-70 mb-4">Order your favorite sweets directly via WhatsApp!</p>
//             <a
//               href="https://wa.me/919494244949?text=Hi%20Sri%20Ganesh%20Sweets!%20I'd%20like%20to%20place%20an%20order."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-background px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
//             >
//               💬 WhatsApp Order
//             </a>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
//           <p className="text-sm opacity-50">
//             © {new Date().getFullYear()} Sri Ganesh Sweets. All rights reserved.
//           </p>

//           {/* Attribution Code Integrated Here */}
//           <div className="flex justify-center items-center gap-1 text-sm font-medium">
//             <span className="opacity-70">Made with</span> 
//             <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> 
//             <span className="opacity-70">by</span>
//             <a
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 text-orange-500 hover:text-orange-400 hover:underline transition-all"
//             >
//               <img
//                 src="https://www.staffarc.in/images/Staffarc-logo.png"
//                 alt="StaffArc logo"
//                 className="h-5 w-5 object-contain"
//               />
//               StaffArc
//             </a>
//           </div>

//           <button
//             onClick={scrollToTop}
//             className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity group"
//           >
//             Back to top
//             <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, Clock, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    // Changed bg-foreground to a deep maroon hex to ensure it looks good immediately
    <footer className="bg-[#800000] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Sri Ganesh Sweets" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="font-display font-bold text-lg text-white">Sri Ganesh</h3>
                <p className="text-xs tracking-widest uppercase opacity-60 text-white">Sweets</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Authentic Andhra sweets from the heart of Godavari. Premium quality, traditional recipes, modern hygiene.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Our Products" },
                { to: "/cart", label: "Cart" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <a href="tel:9494244949" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 text-gold" /> 9494244949
              </a>
              <a href="mailto:info.ganeshsweets@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 text-gold" /> info.ganeshsweets@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>3-64/2 116, MMTS Station Road, Chanda Nagar, Hyderabad 500050</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" /> 9 AM – 10 PM (Mon–Sun)
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Order Now</h4>
            <p className="text-sm opacity-70 mb-4">Order your favorite sweets directly via WhatsApp!</p>
            <a
              href="https://wa.me/919494244949?text=Hi%20Sri%20Ganesh%20Sweets!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#800000] px-5 py-2.5 rounded-full text-sm font-bold transition-colors hover:bg-gold"
            >
              💬 WhatsApp Order
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Sri Ganesh Sweets. All rights reserved.
          </p>

          {/* Attribution Section */}
          <div className="flex justify-center items-center gap-1 text-sm font-medium">
            <span className="opacity-70">Made with</span> 
            <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> 
            <span className="opacity-70">by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gold hover:text-gold-light hover:underline transition-all"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain brightness-200"
              />
              StaffArc
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;