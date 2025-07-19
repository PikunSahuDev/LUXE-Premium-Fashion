// Application data
const appData = {
  "brands": [
    {
      "id": 1,
      "name": "Elegance Co",
      "category": "Luxury",
      "description": "Premium fashion house specializing in sophisticated designs",
      "logo": "/api/placeholder/120/60",
      "established": "1985",
      "country": "Italy"
    },
    {
      "id": 2,
      "name": "Comfort Plus",
      "category": "Daily",
      "description": "Comfortable, high-quality everyday essentials",
      "logo": "/api/placeholder/120/60",
      "established": "2010",
      "country": "USA"
    },
    {
      "id": 3,
      "name": "Seasonal Style",
      "category": "Seasonal",
      "description": "Weather-specific clothing and accessories",
      "logo": "/api/placeholder/120/60",
      "established": "2015",
      "country": "Canada"
    },
    {
      "id": 4,
      "name": "Trend Wave",
      "category": "Trending",
      "description": "Latest fashion trends and viral styles",
      "logo": "/api/placeholder/120/60",
      "established": "2020",
      "country": "South Korea"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Luxury Silk Evening Gown",
      "category": "Luxury",
      "subcategory": "Dresses",
      "brand": "Elegance Co",
      "brandId": 1,
      "price": 899.99,
      "originalPrice": 1299.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600", 
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Exquisite hand-crafted silk evening gown with intricate beading. Perfect for galas and special occasions.",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Midnight Blue", "Emerald Green", "Ruby Red", "Champagne"],
      "material": "100% Mulberry Silk",
      "rating": 4.9,
      "reviews": 45,
      "inStock": true,
      "isLuxury": true,
      "season": "All Season",
      "brandStory": "Handcrafted by Italian artisans with over 35 years of heritage in luxury fashion."
    },
    {
      "id": 2,
      "name": "Organic Cotton Basic Tee",
      "category": "Daily",
      "subcategory": "T-Shirts", 
      "brand": "Comfort Plus",
      "brandId": 2,
      "price": 24.99,
      "originalPrice": 34.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Ultra-soft organic cotton t-shirt perfect for everyday comfort and casual styling.",
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["White", "Black", "Navy", "Gray", "Olive", "Dusty Pink"],
      "material": "100% Organic Cotton",
      "rating": 4.6,
      "reviews": 892,
      "inStock": true,
      "isDaily": true,
      "season": "All Season",
      "sustainability": "GOTS Certified Organic Cotton"
    },
    {
      "id": 3,
      "name": "Winter Wool Coat",
      "category": "Seasonal",
      "subcategory": "Outerwear",
      "brand": "Seasonal Style", 
      "brandId": 3,
      "price": 299.99,
      "originalPrice": 399.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Warm and stylish wool coat designed for harsh winter weather. Features water-resistant coating.",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Charcoal", "Camel", "Black", "Navy"],
      "material": "80% Wool, 20% Polyester",
      "rating": 4.7,
      "reviews": 234,
      "inStock": true,
      "isSeasonal": true,
      "season": "Winter",
      "weatherRating": "Suitable for -10°C to 5°C"
    },
    {
      "id": 4,
      "name": "Viral TikTok Crop Top",
      "category": "Trending",
      "subcategory": "Tops",
      "brand": "Trend Wave",
      "brandId": 4,
      "price": 39.99,
      "originalPrice": 49.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Social media sensation crop top as seen on TikTok influencers. Perfect for concerts and festivals.",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Hot Pink", "Electric Blue", "Neon Green", "Purple"],
      "material": "95% Cotton, 5% Elastane",
      "rating": 4.3,
      "reviews": 1205,
      "inStock": true,
      "isTrending": true,
      "season": "Spring/Summer",
      "socialMedia": "Featured by 50+ influencers"
    },
    {
      "id": 5,
      "name": "Designer Leather Handbag",
      "category": "Luxury",
      "subcategory": "Accessories",
      "brand": "Elegance Co",
      "brandId": 1,
      "price": 1299.99,
      "originalPrice": 1699.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Handcrafted Italian leather handbag with gold-plated hardware. Limited edition design.",
      "sizes": ["One Size"],
      "colors": ["Black", "Cognac Brown", "Deep Red", "Cream"],
      "material": "Genuine Italian Leather",
      "rating": 4.8,
      "reviews": 67,
      "inStock": true,
      "isLuxury": true,
      "season": "All Season",
      "authenticity": "Certificate of Authenticity included"
    },
    {
      "id": 6,
      "name": "Comfortable Yoga Leggings",
      "category": "Daily",
      "subcategory": "Activewear",
      "brand": "Comfort Plus",
      "brandId": 2,
      "price": 49.99,
      "originalPrice": 69.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "High-waisted leggings with moisture-wicking technology. Perfect for yoga, gym, or daily activities.",
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Navy", "Charcoal", "Lavender", "Sage Green"],
      "material": "88% Polyester, 12% Elastane",
      "rating": 4.5,
      "reviews": 456,
      "inStock": true,
      "isDaily": true,
      "season": "All Season",
      "features": "Moisture-wicking, 4-way stretch, squat-proof"
    },
    {
      "id": 7,
      "name": "Summer Linen Dress",
      "category": "Seasonal",
      "subcategory": "Dresses",
      "brand": "Seasonal Style",
      "brandId": 3,
      "price": 89.99,
      "originalPrice": 119.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Breathable linen dress perfect for hot summer days. Relaxed fit with tie waist detail.",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["White", "Light Blue", "Coral", "Sage Green", "Natural Linen"],
      "material": "100% European Linen",
      "rating": 4.4,
      "reviews": 189,
      "inStock": true,
      "isSeasonal": true,
      "season": "Summer",
      "care": "Machine washable, hang dry recommended"
    },
    {
      "id": 8,
      "name": "Instagram Oversized Blazer",
      "category": "Trending",
      "subcategory": "Blazers",
      "brand": "Trend Wave",
      "brandId": 4,
      "price": 129.99,
      "originalPrice": 179.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Oversized blazer trending on Instagram and Pinterest. Perfect for creating chic professional looks.",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Black", "White", "Beige", "Pink", "Mint Green"],
      "material": "70% Polyester, 25% Viscose, 5% Elastane",
      "rating": 4.6,
      "reviews": 723,
      "inStock": true,
      "isTrending": true,
      "season": "Spring/Fall",
      "styling": "As seen on 100+ fashion influencers"
    },
    {
      "id": 9,
      "name": "Luxury Cashmere Sweater", 
      "category": "Luxury",
      "subcategory": "Sweaters",
      "brand": "Elegance Co",
      "brandId": 1,
      "price": 599.99,
      "originalPrice": 799.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Premium cashmere sweater crafted from the finest Mongolian cashmere. Timeless elegance and supreme comfort.",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Cream", "Charcoal", "Camel", "Navy", "Burgundy"],
      "material": "100% Mongolian Cashmere",
      "rating": 4.9,
      "reviews": 89,
      "inStock": true,
      "isLuxury": true,
      "season": "Fall/Winter",
      "origin": "Handknit in Scotland"
    },
    {
      "id": 10,
      "name": "Everyday Denim Jeans",
      "category": "Daily", 
      "subcategory": "Jeans",
      "brand": "Comfort Plus",
      "brandId": 2,
      "price": 79.99,
      "originalPrice": 99.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Classic straight-leg jeans with stretch comfort. Perfect fit for all body types and daily wear.",
      "sizes": ["24", "26", "28", "30", "32", "34", "36"],
      "colors": ["Dark Wash", "Medium Wash", "Light Wash", "Black"],
      "material": "98% Cotton, 2% Elastane",
      "rating": 4.5,
      "reviews": 1340,
      "inStock": true,
      "isDaily": true,
      "season": "All Season",
      "fit": "Straight leg, mid-rise, stretch comfort"
    },
    {
      "id": 11,
      "name": "Trending Bucket Hat",
      "category": "Trending",
      "subcategory": "Accessories", 
      "brand": "Trend Wave",
      "brandId": 4,
      "price": 29.99,
      "originalPrice": 39.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Y2K-inspired bucket hat making a major comeback. Perfect for festival season and street style.",
      "sizes": ["One Size"],
      "colors": ["Black", "White", "Tie Dye", "Neon Pink", "Holographic"],
      "material": "100% Cotton Canvas",
      "rating": 4.2,
      "reviews": 892,
      "inStock": true,
      "isTrending": true,
      "season": "Spring/Summer",
      "trend": "Featured in Vogue's trend report"
    },
    {
      "id": 12,
      "name": "Fall Pumpkin Spice Cardigan",
      "category": "Seasonal",
      "subcategory": "Cardigans",
      "brand": "Seasonal Style",
      "brandId": 3,
      "price": 69.99,
      "originalPrice": 89.99,
      "images": [
        "/api/placeholder/400/600",
        "/api/placeholder/400/600", 
        "/api/placeholder/400/600",
        "/api/placeholder/400/600"
      ],
      "description": "Cozy chunky knit cardigan in warm fall colors. Perfect for layering during autumn season.",
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Pumpkin Orange", "Rust", "Mustard", "Burgundy", "Forest Green"],
      "material": "60% Acrylic, 30% Wool, 10% Alpaca",
      "rating": 4.6,
      "reviews": 334,
      "inStock": true,
      "isSeasonal": true,
      "season": "Fall",
      "vibe": "Perfect for pumpkin patch visits and cozy coffee dates"
    }
  ]
};

// Global state
let currentSlide = 0;
let brandCarouselPosition = 0;
let wishlistItems = [];
let cartItems = [];
let filteredProducts = [...appData.products];
let currentProduct = null;
let heroSliderInterval = null;

// Initialize the application
function init() {
  setupHeroSlider();
  setupBrandCarousel();
  populateBrandFilter();
  setupEventListeners();
  renderProducts();
  
  // Auto-advance hero slider
  heroSliderInterval = setInterval(nextSlide, 5000);
}

// Hero Slider
function setupHeroSlider() {
  const heroNavBtns = document.querySelectorAll('.hero__nav-btn');
  heroNavBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      goToSlide(index);
    });
  });
}

function goToSlide(index) {
  const heroSlides = document.querySelectorAll('.hero__slide');
  const heroNavBtns = document.querySelectorAll('.hero__nav-btn');
  
  // Remove active class from current slide and nav button
  heroSlides[currentSlide]?.classList.remove('hero__slide--active');
  heroNavBtns[currentSlide]?.classList.remove('hero__nav-btn--active');
  
  // Set new slide
  currentSlide = index;
  
  // Add active class to new slide and nav button
  heroSlides[currentSlide]?.classList.add('hero__slide--active');
  heroNavBtns[currentSlide]?.classList.add('hero__nav-btn--active');
}

function nextSlide() {
  const heroSlides = document.querySelectorAll('.hero__slide');
  const nextIndex = (currentSlide + 1) % heroSlides.length;
  goToSlide(nextIndex);
}

// Brand Carousel
function setupBrandCarousel() {
  renderBrands();
  
  const brandsPrev = document.getElementById('brandsPrev');
  const brandsNext = document.getElementById('brandsNext');
  
  if (brandsPrev && brandsNext) {
    brandsPrev.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      brandCarouselPosition = Math.max(brandCarouselPosition - 1, 0);
      updateBrandCarousel();
    });
    
    brandsNext.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const maxPosition = Math.max(0, appData.brands.length - 3);
      brandCarouselPosition = Math.min(brandCarouselPosition + 1, maxPosition);
      updateBrandCarousel();
    });
  }
}

function renderBrands() {
  const brandsTrack = document.getElementById('brandsTrack');
  if (!brandsTrack) return;
  
  brandsTrack.innerHTML = appData.brands.map(brand => `
    <div class="brand__card">
      <img src="${brand.logo}" alt="${brand.name}" class="brand__logo">
      <h3 class="brand__name">${brand.name}</h3>
      <span class="brand__category">${brand.category}</span>
      <p class="brand__description">${brand.description}</p>
      <div class="brand__meta">
        <span>Est. ${brand.established}</span>
        <span>${brand.country}</span>
      </div>
    </div>
  `).join('');
}

function updateBrandCarousel() {
  const brandsTrack = document.getElementById('brandsTrack');
  if (!brandsTrack) return;
  
  const translateX = -brandCarouselPosition * (280 + 24); // card width + gap
  brandsTrack.style.transform = `translateX(${translateX}px)`;
}

function populateBrandFilter() {
  const brandFilter = document.getElementById('brandFilter');
  if (!brandFilter) return;
  
  const uniqueBrands = [...new Set(appData.products.map(p => p.brand))];
  brandFilter.innerHTML = '<option value="">All Brands</option>' + 
    uniqueBrands.map(brand => `<option value="${brand}">${brand}</option>`).join('');
}

// Event Listeners
function setupEventListeners() {
  // Collection cards
  document.querySelectorAll('.collection__card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const category = card.dataset.category;
      const categoryFilter = document.getElementById('categoryFilter');
      if (categoryFilter) {
        categoryFilter.value = category;
        filterProducts();
        scrollToProducts();
      }
    });
  });
  
  // Hero CTAs
  document.querySelectorAll('.hero__cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const category = btn.dataset.category;
      const categoryFilter = document.getElementById('categoryFilter');
      if (categoryFilter) {
        categoryFilter.value = category;
        filterProducts();
        scrollToProducts();
      }
    });
  });
  
  // Filters
  const categoryFilter = document.getElementById('categoryFilter');
  const brandFilter = document.getElementById('brandFilter');
  const priceFilter = document.getElementById('priceFilter');
  const seasonFilter = document.getElementById('seasonFilter');
  const sortFilter = document.getElementById('sortFilter');
  
  if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
  if (brandFilter) brandFilter.addEventListener('change', filterProducts);
  if (priceFilter) priceFilter.addEventListener('change', filterProducts);
  if (seasonFilter) seasonFilter.addEventListener('change', filterProducts);
  if (sortFilter) sortFilter.addEventListener('change', sortProducts);
  
  // Search
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  
  if (searchInput) {
    searchInput.addEventListener('input', searchProducts);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchProducts();
      }
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchProducts();
    });
  }
  
  // Cart
  const cartBtn = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  if (cartBtn) cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleCart();
  });
  if (cartClose) cartClose.addEventListener('click', (e) => {
    e.preventDefault();
    toggleCart();
  });
  if (checkoutBtn) checkoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkout();
  });
  
  // Modal
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  
  // Wishlist
  const wishlistBtn = document.getElementById('wishlistBtn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showWishlist();
    });
  }
}

function scrollToProducts() {
  const productsSection = document.querySelector('.products');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Product filtering and searching
function filterProducts() {
  const categoryFilter = document.getElementById('categoryFilter');
  const brandFilter = document.getElementById('brandFilter');
  const priceFilter = document.getElementById('priceFilter');
  const seasonFilter = document.getElementById('seasonFilter');
  
  const categoryValue = categoryFilter?.value || '';
  const brandValue = brandFilter?.value || '';
  const priceValue = priceFilter?.value || '';
  const seasonValue = seasonFilter?.value || '';
  
  filteredProducts = appData.products.filter(product => {
    const matchesCategory = !categoryValue || product.category === categoryValue;
    const matchesBrand = !brandValue || product.brand === brandValue;
    const matchesSeason = !seasonValue || product.season.includes(seasonValue);
    
    let matchesPrice = true;
    if (priceValue) {
      const price = product.price;
      switch (priceValue) {
        case '0-50':
          matchesPrice = price <= 50;
          break;
        case '50-100':
          matchesPrice = price > 50 && price <= 100;
          break;
        case '100-300':
          matchesPrice = price > 100 && price <= 300;
          break;
        case '300-600':
          matchesPrice = price > 300 && price <= 600;
          break;
        case '600+':
          matchesPrice = price > 600;
          break;
      }
    }
    
    return matchesCategory && matchesBrand && matchesSeason && matchesPrice;
  });
  
  sortProducts();
}

function searchProducts() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput?.value?.toLowerCase() || '';
  
  if (!query) {
    filterProducts();
    return;
  }
  
  filteredProducts = appData.products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.brand.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  
  renderProducts();
}

function sortProducts() {
  const sortFilter = document.getElementById('sortFilter');
  const sortBy = sortFilter?.value || 'featured';
  
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    default:
      // Featured - keep original order
      break;
  }
  
  renderProducts();
}

// Product rendering
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <h3>No products found</h3>
        <p>Try adjusting your filters or search terms.</p>
      </div>
    `;
    return;
  }
  
  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product__card" onclick="openProductModal(${product.id})">
      <div class="product__image">
        <img src="${product.images[0]}" alt="${product.name}">
        ${getBadgeHTML(product)}
        <button class="product__wishlist ${wishlistItems.includes(product.id) ? 'product__wishlist--active' : ''}" 
                onclick="event.stopPropagation(); toggleWishlist(${product.id})">
          ♡
        </button>
      </div>
      <div class="product__content">
        <div class="product__brand">${product.brand}</div>
        <h3 class="product__name">${product.name}</h3>
        <div class="product__rating">
          ${getRatingHTML(product.rating)}
          <span class="product__reviews">(${product.reviews})</span>
        </div>
        <div class="product__price">
          <span class="price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice !== product.price ? `<span class="price--original">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="product__actions">
          <button class="btn btn--primary product__cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getBadgeHTML(product) {
  if (product.isLuxury) {
    return '<span class="product__badge product__badge--luxury">Luxury</span>';
  }
  if (product.isTrending) {
    return '<span class="product__badge product__badge--trending">Trending</span>';
  }
  return '';
}

function getRatingHTML(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  
  let html = '<div class="rating">';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    html += '<span class="rating__star">★</span>';
  }
  
  // Half star
  if (halfStar) {
    html += '<span class="rating__star">★</span>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    html += '<span class="rating__star rating__star--empty">★</span>';
  }
  
  html += '</div>';
  return html;
}

// Product Modal
function openProductModal(productId) {
  // Pause hero slider when modal is open
  if (heroSliderInterval) {
    clearInterval(heroSliderInterval);
  }
  
  currentProduct = appData.products.find(p => p.id === productId);
  if (!currentProduct) return;
  
  const brand = appData.brands.find(b => b.id === currentProduct.brandId);
  
  // Update modal content
  const mainImage = document.getElementById('mainImage');
  const imageThumbnails = document.getElementById('imageThumbnails');
  const productBrand = document.getElementById('productBrand');
  const productTitle = document.getElementById('productTitle');
  const productRating = document.getElementById('productRating');
  const productReviews = document.getElementById('productReviews');
  const productPrice = document.getElementById('productPrice');
  const productOriginalPrice = document.getElementById('productOriginalPrice');
  const productDescription = document.getElementById('productDescription');
  const sizeSelect = document.getElementById('sizeSelect');
  const colorOptions = document.getElementById('colorOptions');
  const wishlistProductBtn = document.getElementById('wishlistProductBtn');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const cartPrice = document.getElementById('cartPrice');
  const brandInfo = document.getElementById('brandInfo');
  
  if (mainImage) {
    mainImage.src = currentProduct.images[0];
    mainImage.alt = currentProduct.name;
  }
  
  // Thumbnails
  if (imageThumbnails) {
    imageThumbnails.innerHTML = currentProduct.images.map((image, index) => `
      <div class="thumbnail ${index === 0 ? 'thumbnail--active' : ''}" 
           onclick="changeMainImage('${image}', ${index})">
        <img src="${image}" alt="${currentProduct.name}">
      </div>
    `).join('');
  }
  
  if (productBrand) productBrand.textContent = currentProduct.brand;
  if (productTitle) productTitle.textContent = currentProduct.name;
  if (productRating) productRating.innerHTML = getRatingHTML(currentProduct.rating);
  if (productReviews) productReviews.textContent = `(${currentProduct.reviews} reviews)`;
  if (productPrice) productPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
  if (productOriginalPrice) {
    productOriginalPrice.textContent = currentProduct.originalPrice !== currentProduct.price ? 
      `$${currentProduct.originalPrice.toFixed(2)}` : '';
  }
  if (productDescription) productDescription.textContent = currentProduct.description;
  if (cartPrice) cartPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
  
  // Sizes
  if (sizeSelect) {
    sizeSelect.innerHTML = currentProduct.sizes.map(size => 
      `<option value="${size}">${size}</option>`
    ).join('');
  }
  
  // Colors
  if (colorOptions) {
    colorOptions.innerHTML = currentProduct.colors.map((color, index) => `
      <div class="color-option ${index === 0 ? 'color-option--active' : ''}" 
           style="background: ${getColorValue(color)}" 
           title="${color}"
           onclick="selectColor(this, '${color}')">
      </div>
    `).join('');
  }
  
  // Brand info
  if (brand && brandInfo) {
    brandInfo.innerHTML = `
      <h4>${brand.name}</h4>
      <p>${brand.description}</p>
      <div class="brand__meta">
        <span>Established: ${brand.established}</span>
        <span>Origin: ${brand.country}</span>
      </div>
      ${currentProduct.brandStory ? `<p><strong>Heritage:</strong> ${currentProduct.brandStory}</p>` : ''}
      ${currentProduct.authenticity ? `<p><strong>Authenticity:</strong> ${currentProduct.authenticity}</p>` : ''}
      ${currentProduct.sustainability ? `<p><strong>Sustainability:</strong> ${currentProduct.sustainability}</p>` : ''}
    `;
  }
  
  // Update wishlist button
  const isWishlisted = wishlistItems.includes(currentProduct.id);
  if (wishlistProductBtn) {
    wishlistProductBtn.innerHTML = isWishlisted ? 'Remove from Wishlist ♥' : 'Add to Wishlist ♡';
    wishlistProductBtn.onclick = () => toggleWishlist(currentProduct.id);
  }
  
  // Add to cart button
  if (addToCartBtn) {
    addToCartBtn.onclick = () => addToCart(currentProduct.id);
  }
  
  // Show modal
  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function changeMainImage(imageSrc, index) {
  const mainImage = document.getElementById('mainImage');
  const imageThumbnails = document.getElementById('imageThumbnails');
  
  if (mainImage) {
    mainImage.src = imageSrc;
  }
  
  // Update thumbnail active state
  if (imageThumbnails) {
    imageThumbnails.querySelectorAll('.thumbnail').forEach((thumb, i) => {
      thumb.classList.toggle('thumbnail--active', i === index);
    });
  }
}

function selectColor(element, color) {
  const colorOptions = document.getElementById('colorOptions');
  if (!colorOptions) return;
  
  // Update active state
  colorOptions.querySelectorAll('.color-option').forEach(opt => {
    opt.classList.remove('color-option--active');
  });
  element.classList.add('color-option--active');
}

function getColorValue(colorName) {
  const colorMap = {
    'White': '#ffffff',
    'Black': '#000000',
    'Navy': '#001f3f',
    'Gray': '#808080',
    'Red': '#ff0000',
    'Blue': '#0074d9',
    'Green': '#2ecc40',
    'Pink': '#f012be',
    'Purple': '#b10dc9',
    'Orange': '#ff851b',
    'Yellow': '#ffdc00',
    'Brown': '#8b4513',
    'Beige': '#f5f5dc',
    'Cream': '#fffdd0',
    'Charcoal': '#36454f',
    'Camel': '#c19a6b',
    'Hot Pink': '#ff69b4',
    'Electric Blue': '#7df9ff',
    'Neon Green': '#39ff14',
    'Midnight Blue': '#191970',
    'Emerald Green': '#50c878',
    'Ruby Red': '#e0115f',
    'Champagne': '#f7e7ce'
  };
  
  // Try to match color name
  for (const [name, value] of Object.entries(colorMap)) {
    if (colorName.toLowerCase().includes(name.toLowerCase())) {
      return value;
    }
  }
  
  // Default to a neutral color
  return '#cccccc';
}

function closeModal() {
  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentProduct = null;
  }
  
  // Resume hero slider
  if (!heroSliderInterval) {
    heroSliderInterval = setInterval(nextSlide, 5000);
  }
}

// Wishlist functionality
function toggleWishlist(productId) {
  const index = wishlistItems.indexOf(productId);
  
  if (index > -1) {
    wishlistItems.splice(index, 1);
  } else {
    wishlistItems.push(productId);
  }
  
  updateWishlistUI();
  
  // Update modal wishlist button if open
  if (currentProduct && currentProduct.id === productId) {
    const isWishlisted = wishlistItems.includes(productId);
    const wishlistProductBtn = document.getElementById('wishlistProductBtn');
    if (wishlistProductBtn) {
      wishlistProductBtn.innerHTML = isWishlisted ? 'Remove from Wishlist ♥' : 'Add to Wishlist ♡';
    }
  }
  
  renderProducts(); // Re-render to update wishlist icons
  
  // Show notification
  const product = appData.products.find(p => p.id === productId);
  const isWishlisted = wishlistItems.includes(productId);
  const message = isWishlisted ? 
    `${product.name} added to wishlist!` : 
    `${product.name} removed from wishlist!`;
  showNotification(message);
}

function updateWishlistUI() {
  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) {
    wishlistCount.textContent = wishlistItems.length;
  }
}

function showWishlist() {
  const wishlistedProducts = appData.products.filter(p => wishlistItems.includes(p.id));
  
  if (wishlistedProducts.length === 0) {
    alert('Your wishlist is empty! Start adding items you love.');
    return;
  }
  
  const wishlistItems = wishlistedProducts.map(p => `• ${p.name} - ${p.brand}`).join('\n');
  alert(`Your Wishlist (${wishlistedProducts.length} items):\n\n${wishlistItems}`);
}

// Cart functionality
function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const sizeSelect = document.getElementById('sizeSelect');
  const colorOptions = document.getElementById('colorOptions');
  
  const selectedSize = sizeSelect?.value || product.sizes[0];
  const activeColorOption = colorOptions?.querySelector('.color-option--active');
  const selectedColor = activeColorOption?.title || product.colors[0];
  
  const existingItem = cartItems.find(item => 
    item.id === productId && 
    item.selectedSize === selectedSize && 
    item.selectedColor === selectedColor
  );
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      ...product,
      quantity: 1,
      selectedSize: selectedSize,
      selectedColor: selectedColor
    });
  }
  
  updateCartUI();
  
  // Show success message
  showNotification(`${product.name} added to cart!`);
  
  // Close modal if open
  if (currentProduct && currentProduct.id === productId) {
    closeModal();
  }
}

function removeFromCart(productId) {
  const index = cartItems.findIndex(item => item.id === productId);
  if (index > -1) {
    const product = cartItems[index];
    cartItems.splice(index, 1);
    updateCartUI();
    showNotification(`${product.name} removed from cart`);
  }
}

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartItems_element = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cartCount) {
    cartCount.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }
  
  if (cartItems_element) {
    if (cartItems.length === 0) {
      cartItems_element.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
          <p>Your cart is empty</p>
        </div>
      `;
    } else {
      cartItems_element.innerHTML = cartItems.map(item => `
        <div class="cart-item">
          <div class="cart-item__image">
            <img src="${item.images[0]}" alt="${item.name}">
          </div>
          <div class="cart-item__details">
            <h4>${item.name}</h4>
            <div class="cart-item__brand">${item.brand}</div>
            <div>Size: ${item.selectedSize}, Color: ${item.selectedColor}</div>
            <div class="cart-item__price">$${item.price.toFixed(2)} × ${item.quantity}</div>
          </div>
          <button class="cart-item__remove" onclick="removeFromCart(${item.id})">×</button>
        </div>
      `).join('');
    }
  }
  
  if (cartTotal) {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
  }
}

function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  if (cartSidebar) {
    cartSidebar.classList.toggle('cart-sidebar--active');
  }
}

function checkout() {
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  alert(`Thank you for your order!\n\nItems: ${itemCount}\nTotal: $${total.toFixed(2)}\n\nYour premium fashion items will be shipped with care instructions for each brand.`);
  
  // Clear cart
  cartItems = [];
  updateCartUI();
  toggleCart();
}

// Utility functions
function showNotification(message) {
  // Simple notification - could be enhanced with a proper toast system
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: var(--color-white);
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Make functions available globally
window.openProductModal = openProductModal;
window.changeMainImage = changeMainImage;
window.selectColor = selectColor;
window.toggleWishlist = toggleWishlist;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);