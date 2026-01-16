// Error Suppression Script
// Place this at the top of your HTML to catch and suppress common errors

(function() {
  'use strict';
  
  // Suppress console errors for missing resources
  const originalError = console.error;
  console.error = function(...args) {
    const message = args.join(' ');
    
    // Filter out known missing resource errors
    const suppressPatterns = [
      /Failed to load resource/,
      /404.*File not found/,
      /net::ERR_NAME_NOT_RESOLVED/,
      /Refused to apply style/,
      /MIME type.*not.*supported/,
      /monorail/,
      /MedusaJScloud/,
      /intelligems/,
      /501.*Unsupported method/
    ];
    
    if (!suppressPatterns.some(pattern => pattern.test(message))) {
      originalError.apply(console, args);
    }
  };
  
  // Create stub objects to prevent "Cannot read properties of undefined" errors
  window.MedusaJS = window.MedusaJS || {};
  window.MedusaStore = window.MedusaStore || {};
  window.MedusaStore.theme = window.MedusaStore.theme || { id: null };
  window.MedusaStore.SignInWithShop = window.MedusaStore.SignInWithShop || {};
  window.MedusaStore.PaymentButton = window.MedusaStore.PaymentButton || {};
  window.MedusaStorePay = window.MedusaStorePay || {};
  
  // Stub for Shop integration
  window.MedusaStore.SignInWithShop.initShopCartSync = function() {
    console.log('Shop integration disabled (offline mode)');
  };
  
  // Stub for payment button
  window.MedusaStore.PaymentButton.init = function() {
    console.log('Payment buttons disabled (offline mode)');
  };
  
  // Stub functions that might be called
  window.jdgmSettings = window.jdgmSettings || {};
  window.__st = window.__st || {
    a: 0, offset: 0, reqid: '', pageurl: '', u: '', p: 'home', cid: ''
  };
  
  // Prevent fetch errors from breaking the page
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    if (typeof url === 'string') {
      // Block known failing endpoints
      if (url.includes('monorail') || 
          url.includes('sf_private_access_tokens') ||
          url.includes('checkouts/internal') ||
          url.includes('loyalty-event')) {
        return Promise.resolve(new Response('{}', {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }));
      }
    }
    return originalFetch.apply(this, args).catch(err => {
      console.log('Fetch blocked:', url);
      return new Response('{}', {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    });
  };
  
  // Handle dynamic imports that fail
  window.addEventListener('error', function(e) {
    if (e.message && e.message.includes('Failed to fetch dynamically imported module')) {
      e.preventDefault();
      console.log('Blocked import error:', e.message);
    }
  });
  
  // Suppress unhandled promise rejections
  window.addEventListener('unhandledrejection', function(e) {
    const reason = e.reason?.message || e.reason || '';
    const suppressPatterns = [
      /Failed to fetch/,
      /NetworkError/,
      /Load failed/
    ];
    
    if (suppressPatterns.some(pattern => pattern.test(reason))) {
      e.preventDefault();
      console.log('Suppressed promise rejection:', reason);
    }
  });
  
  console.log('✅ Error suppression active');
})();
