import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, clearCart, totalPrice } = useCart();

  const handleWhatsAppCheckout = () => {
    const lines = items.map(
      (item) => `• ${item.name} (${item.weight}) x${item.quantity} = ₹${item.price * item.quantity}`
    );
    const message = `Hi Sri Ganesh Sweets! I'd like to order:\n\n${lines.join("\n")}\n\nTotal: ₹${totalPrice}\n\nPlease confirm my order.`;
    window.open(
      `https://wa.me/919494244949?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious sweets to get started!</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Your <span className="text-gradient">Cart</span>
            </h1>

            <div className="space-y-4 mb-8">
              {items.map((item) => {
                const compositeId = `${item.id}__${item.weight}`;
                return (
                  <motion.div
                    key={compositeId}
                    layout
                    className="glass-card rounded-xl p-4 flex items-center gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.weight} • ₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(compositeId, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(compositeId, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-display font-bold text-lg w-20 text-right">
                      ₹{item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(compositeId, 0)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg text-muted-foreground">Total</span>
                <span className="text-3xl font-display font-bold text-foreground">₹{totalPrice}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-background px-6 py-3.5 rounded-full font-medium text-sm hover:bg-green-700 transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Checkout via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center gap-2 border border-border px-6 py-3.5 rounded-full font-medium text-sm text-muted-foreground hover:text-destructive hover:border-destructive transition-all"
                >
                  <Trash2 className="w-4 h-4" /> Clear Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
