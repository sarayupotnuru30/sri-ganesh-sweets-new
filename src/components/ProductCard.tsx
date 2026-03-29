import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    const priceOpt = product.prices[selectedPrice];
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      weight: priceOpt.weight,
      price: priceOpt.price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="glass-card rounded-xl overflow-hidden hover-glow group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
            product.category === "hot"
              ? "bg-orange-100 text-orange-700"
              : "bg-pink-100 text-pink-700"
          }`}>
            {product.category === "hot" ? "🔥 Hot" : "🍬 Sweet"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Weight selector */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.prices.map((opt, i) => (
            <button
              key={opt.weight}
              onClick={() => setSelectedPrice(i)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedPrice === i
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {opt.weight}
            </button>
          ))}
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-display font-bold text-foreground">
            ₹{product.prices[selectedPrice].price}
          </span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              added
                ? "bg-green-600 text-background"
                : "bg-primary text-primary-foreground hover:shadow-md hover:scale-105"
            }`}
          >
            {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
