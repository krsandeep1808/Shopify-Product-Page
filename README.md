# Shopify Product Page Assignment

A fully functional, dynamic product page for a Shopify store featuring premium chocolate products.

## 📋 Project Overview

This project implements a complete product page based on the Shopify Developer Assignment requirements, featuring:

- **Dynamic Product Gallery**: Interactive image carousel with thumbnail navigation
- **Purchase Options**: Radio buttons for one-time purchase vs subscription
- **Flavor Selection**: Multiple flavor variants (Dark Chocolate, Vanilla Bean, Orange Zest)
- **Subscription Features**: Dynamic pricing and delivery frequency options
- **Interactive UI**: Responsive design with smooth animations
- **Cart Functionality**: Add to cart with dynamic pricing updates

## 🚀 Features Implemented

### ✅ Product Media Gallery
- ✅ Product image carousel with thumbnail navigation
- ✅ Main image updates dynamically when thumbnails are clicked
- ✅ Images reflect selected product variants (colors/flavors)

### ✅ Purchase Options (Radio Group with Dynamic UI)
- ✅ One-time purchase vs subscription radio buttons
- ✅ Dynamic pricing updates based on selection
- ✅ Subscription includes 20% discount pricing
- ✅ UI shows included items, discounts, and benefits for each mode

### ✅ Flavor Selection
- ✅ Multiple flavor options (Chocolate, Vanilla, Orange)
- ✅ Single/Multi-selection support
- ✅ Double-click to select/deselect flavors
- ✅ Selection reflected in appropriate variants

### ✅ Dynamic Pricing & Discounts
- ✅ Real-time pricing updates based on user selections
- ✅ Subscription includes 20% discount
- ✅ Display current and original prices
- ✅ Subscription pricing compared to one-time purchase

### ✅ "What's Included" Section
- ✅ Content updates based on selected mode
- ✅ Different benefits for one-time vs subscription
- ✅ Bullet points with benefits

### ✅ Add to Cart Logic
- ✅ "Large drink subscription" equivalent functionality
- ✅ Cart button reflects appropriate variant selection
- ✅ Correct variant selection reflected in cart

## 🛠 Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Vanilla JS for all interactive functionality
- **Responsive Design**: Mobile-first approach with breakpoints

### Key Features
- **Performance**: Optimized images with lazy loading
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **SEO**: Proper meta tags and structured data
- **Cross-browser**: Compatible with all modern browsers

## 📱 Responsive Design

The product page is fully responsive and optimized for:
- **Desktop**: Full grid layout with side-by-side product media and details
- **Tablet**: Adapted layout with optimized spacing
- **Mobile**: Stacked layout with touch-friendly interactions

## 🎨 Design Highlights

- **Color Scheme**: Chocolate brown (#8B4513) primary color with clean whites and grays
- **Typography**: Inter font family for modern, readable text
- **Animations**: Smooth transitions and hover effects
- **Loading States**: Visual feedback for user interactions

## 📦 File Structure

```
shopify-product-page/
├── index.html              # Main HTML file (Static Version)
├── styles.css              # All CSS styles (Shared)
├── script.js               # JavaScript functionality (Static)
├── product-liquid.liquid   # Shopify Liquid template (Production)
├── README.md               # Project documentation
└── LIQUID_VS_STATIC.md     # Comparison guide between versions
```

## 📋 File Descriptions

### **Core Files**

#### `index.html` - Static Version
- **Purpose**: Main product page for demo/development
- **Features**: Complete UI with hardcoded data
- **Usage**: Open directly in browser
- **Best For**: Design validation, client demos, testing

#### `styles.css` - Shared Styles
- **Purpose**: All CSS styling for both versions
- **Features**: Responsive design, animations, modern styling
- **Compatibility**: Works with both static and Liquid versions
- **Highlights**: CSS Grid, Flexbox, smooth transitions

#### `script.js` - Static JavaScript
- **Purpose**: Interactive functionality for static version
- **Features**: Gallery, pricing updates, cart simulation
- **Functions**: Image switching, flavor selection, quantity updates
- **Limitations**: Mock cart functionality only

### **Shopify Integration Files**

#### `product-liquid.liquid` - Production Template
- **Purpose**: Shopify-ready Liquid template
- **Features**: Dynamic data, real cart integration, admin settings
- **Usage**: Deploy to Shopify theme's `templates/product.liquid`
- **Benefits**: Real product data, inventory tracking, SEO optimization

### **Documentation Files**

#### `README.md` - Project Documentation
- **Purpose**: Complete project guide and documentation
- **Contents**: Features, setup, customization, technical details
- **Audience**: Developers, clients, stakeholders

#### `LIQUID_VS_STATIC.md` - Comparison Guide
- **Purpose**: Detailed comparison between static and Liquid versions
- **Contents**: Feature comparison, pros/cons, usage recommendations
- **Helps With**: Choosing the right version for your needs

## 🚀 How to Run

### **Quick Start (Static Version)**
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process or dependencies required!

### **Shopify Integration (Production)**
1. Copy `product-liquid.liquid` to your theme's `templates/product.liquid`
2. Update theme CSS with styles from `styles.css`
3. Add enhanced JavaScript functionality
4. Configure product variants and images in Shopify admin

## 🔧 Customization

### Adding New Flavors
1. Update the flavor buttons in `index.html`
2. Add corresponding images to the thumbnail gallery
3. Update the `selectFlavor()` function in `script.js`

### Pricing Changes
1. Update price values in the HTML
2. Modify the pricing logic in `script.js`
3. Update discount calculations accordingly

### Styling Modifications
1. All styles are in `styles.css`
2. CSS custom properties for easy theme changes
3. Responsive breakpoints clearly defined

## 📊 Evaluation Criteria Met

- ✅ **Accurate Implementation**: Matches Figma design requirements
- ✅ **Clean Code**: Well-structured HTML, CSS, and JavaScript
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Performance**: Optimized images and smooth interactions
- ✅ **Documentation**: Clear code comments and README

## 🔄 Version Information

### **Static HTML Version** (Current)
- **Status**: ✅ Complete and functional
- **Features**: Full UI with mock data
- **Benefits**: Easy testing, quick demos, no dependencies
- **Limitations**: No real cart integration, hardcoded data

### **Liquid Template Version** (Production Ready)
- **Status**: ✅ Complete and Shopify-ready
- **Features**: Dynamic data, real cart, admin settings
- **Benefits**: Full Shopify integration, SEO optimized
- **Requirements**: Shopify store and theme integration

## 🚀 Deployment Options

### **Option 1: Static Demo (Recommended for Testing)**
```bash
# No setup required - just open in browser
open index.html
```

### **Option 2: Shopify Theme Integration**
```bash
# Copy Liquid template to your theme
cp product-liquid.liquid themes/your-theme/templates/product.liquid

# Update theme assets with CSS and JS
cp styles.css themes/your-theme/assets/
cp script.js themes/your-theme/assets/
```

### **Option 3: Shopify CLI Development**
```bash
# Install Shopify CLI
npm install -g @shopify/cli

# Create new theme or connect existing
shopify theme init
shopify theme dev
```

## 📚 Additional Resources

### **Documentation Files**
- **`README.md`** - This comprehensive guide
- **`LIQUID_VS_STATIC.md`** - Detailed comparison between versions

### **Code Files**
- **`index.html`** - Static version with complete functionality
- **`product-liquid.liquid`** - Production Shopify template
- **`styles.css`** - Shared styling for both versions
- **`script.js`** - Interactive functionality

### **Key Features Summary**
- ✅ **4 Product Images**: Interactive gallery with thumbnails
- ✅ **Dynamic Pricing**: Real-time updates based on selections
- ✅ **Purchase Options**: One-time vs subscription with 20% discount
- ✅ **Flavor Selection**: 3 variants (Dark Chocolate, Vanilla, Orange)
- ✅ **Responsive Design**: Works on all devices
- ✅ **Cart Integration**: Add to cart with confirmation modal
- ✅ **Admin Ready**: Liquid version with theme settings

## 🎯 Future Enhancements

- [ ] Integration with Shopify API
- [ ] Product reviews and ratings
- [ ] Related products section
- [ ] Wishlist functionality
- [ ] Advanced filtering options
- [ ] Multi-language support
- [ ] A/B testing capabilities

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is created for educational purposes as part of a Shopify developer assignment.
