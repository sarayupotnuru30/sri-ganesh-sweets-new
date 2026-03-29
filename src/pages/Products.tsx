import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, hotItems, sweets } from "@/data/products";

type Filter = "all" | "hot" | "sweet";

const Products = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const filtered = (filter === "all" ? products : filter === "hot" ? hotItems : sweets).filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Menu</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Explore our complete collection of authentic Andhra sweets and hot items
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex gap-2">
              {([["all", "All Items"], ["hot", "🔥 Hot Items"], ["sweet", "🍬 Sweets"]] as const).map(
                ([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === key
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No products found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
