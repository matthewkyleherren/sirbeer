/**
 * Mock MedusaJS global object for local development
 * This prevents errors from scripts expecting MedusaJS API
 */

// Initialize MedusaJS global if it doesn't exist
window.MedusaStore = window.MedusaStore || {};

// Shop configuration
Object.assign(window.MedusaStore, {
  shop: "collider-local.store.local",
  locale: "en",
  currency: {
    active: "GBP",
    rate: "1.0"
  },
  country: "GB",
  theme: {
    name: "Collider Local",
    id: 1,
    schema_name: "Collider by Dash",
    schema_version: "4.1.0",
    role: "main"
  },
  cdnHost: "localhost/assets",
  routes: {
    root: "/"
  },
  
  // Mock cart object
  cart: null,
  
  // Load features placeholder
  loadFeatures: function() {
    return { q: [] };
  },
  
  autoloadFeatures: function() {
    return { q: [] };
  }
});

// Initialize cart as empty
window.MedusaStore.cart = {
  item_count: 0,
  items: [],
  total_price: 0,
  currency: "GBP"
};

// Theme strings
window.shpTheme = {
  strings: {
    mobileMenuBack: "Back",
    addToCart: "add to cart",
    unavailableProduct: "Sold out",
    unknownVariantTitle: "Unknown product variant",
    unknownVariantMessage: "There is no such variant of this product",
    soldoutProduct: "Sold out",
    cartUpdateUnsuccessful: "Shopping cart update cannot be performed",
    productInventoryLevelTooLow: "There are currently no more items available for the selected product",
    productURLCopied: "Product url copied to clipboard",
    articleURLCopied: "Article url copied to clipboard",
    contactProductEnquire: "Enquiry about product:",
    free_shipment_missing: 'Spend <strong>{{value}}</strong> more to qualify for <strong>FREE {{country}} SHIPPING</strong>',
    free_shipment_unlocked: 'You are eligible for <strong>FREE {{country}} SHIPPING</strong>'
  },
  money: {
    currencySymbol: "£",
    moneyFormat: "£{{amount}}",
    moneyFormatWithCurrency: "£{{amount}} GBP"
  }
};

console.log('✓ MedusaJS mock initialized');
