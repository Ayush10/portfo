export default function StorePage() {
  const products = [
    {
      name: 'PM Essentials Notebook',
      price: '$24.99',
      description: 'Premium notebook with PM templates, frameworks, and planning pages.',
      image: '📓',
      category: 'Stationery',
      badge: 'Bestseller',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Product Manager T-Shirt',
      price: '$29.99',
      description: 'Comfortable cotton tee with witty PM quotes and designs.',
      image: '👕',
      category: 'Apparel',
      badge: 'New',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'PM Framework Poster Set',
      price: '$34.99',
      description: 'Set of 5 high-quality posters featuring essential PM frameworks.',
      image: '🖼️',
      category: 'Home Office',
      badge: null,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Product Strategy Mug',
      price: '$18.99',
      description: 'Ceramic mug with inspirational product quotes to fuel your day.',
      image: '☕',
      category: 'Accessories',
      badge: 'Bestseller',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'PM Sticker Pack',
      price: '$12.99',
      description: '20 premium stickers with PM jokes, frameworks, and icons.',
      image: '🎨',
      category: 'Accessories',
      badge: null,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Wireframe Whiteboard',
      price: '$49.99',
      description: 'Portable whiteboard with pre-printed device frames for sketching.',
      image: '🖊️',
      category: 'Home Office',
      badge: null,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'PM Hoodie',
      price: '$54.99',
      description: 'Premium hoodie with embroidered PM logo and comfortable fit.',
      image: '🧥',
      category: 'Apparel',
      badge: 'New',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'PRD Template Bundle',
      price: '$39.99',
      description: 'Digital bundle of 20+ PRD templates for various product types.',
      image: '📦',
      category: 'Digital',
      badge: 'Digital',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      name: 'PM Desk Mat',
      price: '$44.99',
      description: 'Large desk mat with printed keyboard shortcuts and frameworks.',
      image: '🖥️',
      category: 'Home Office',
      badge: null,
      gradient: 'from-emerald-500 to-green-500',
    },
  ];

  const categories = ['All', 'Apparel', 'Stationery', 'Home Office', 'Accessories', 'Digital'];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            PM Store
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Exclusive merchandise and resources designed for product managers who love what they do.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`relative bg-gradient-to-br ${product.gradient} p-12 flex items-center justify-center`}>
                <div className="text-8xl">{product.image}</div>
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-zinc-900 text-xs font-medium rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 flex-1">
                    {product.name}
                  </h3>
                  <span className={`text-lg font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.price}
                  </span>
                </div>
                
                <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full mb-3">
                  {product.category}
                </span>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {product.description}
                </p>

                <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${product.gradient} text-white font-medium hover:shadow-lg transition-all duration-200`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Free Shipping</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">On orders over $50</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">30-Day Returns</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Easy returns & exchanges</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Premium materials only</p>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Subscribe to our newsletter and receive exclusive discounts and early access to new products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-zinc-900 outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-zinc-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
