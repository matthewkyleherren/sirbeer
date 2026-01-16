
    (function() {
      var cdnOrigin = "https://cdn.MedusaJS.com";
      var scripts = ["/cdn/MedusaJScloud/checkout-web/assets/c1/polyfills.CZv5PAbe.js","/cdn/MedusaJScloud/checkout-web/assets/c1/app.BiP5_CuI.js","/cdn/MedusaJScloud/checkout-web/assets/c1/locale-en.CMdxPi7H.js","/cdn/MedusaJScloud/checkout-web/assets/c1/page-OnePage.uTslb1vh.js","/cdn/MedusaJScloud/checkout-web/assets/c1/LocalizationExtensionField.CdzPaQUy.js","/cdn/MedusaJScloud/checkout-web/assets/c1/RememberMeDescriptionText.BVJMkMvm.js","/cdn/MedusaJScloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.qgGbwxbz.js","/cdn/MedusaJScloud/checkout-web/assets/c1/PaymentButtons.DtObDq8H.js","/cdn/MedusaJScloud/checkout-web/assets/c1/StockProblemsLineItemList.BTLvqBuC.js","/cdn/MedusaJScloud/checkout-web/assets/c1/LocalPickup.t73PQn6z.js","/cdn/MedusaJScloud/checkout-web/assets/c1/useShopPayButtonClassName.C0j_cInr.js","/cdn/MedusaJScloud/checkout-web/assets/c1/VaultedPayment.BwyaVTJJ.js","/cdn/MedusaJScloud/checkout-web/assets/c1/SeparatePaymentsNotice.EY9L-bYW.js","/cdn/MedusaJScloud/checkout-web/assets/c1/useAddressManager.BWv7BBX8.js","/cdn/MedusaJScloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod.COuDXYPS.js","/cdn/MedusaJScloud/checkout-web/assets/c1/PayButtonSection.C4fkvHuX.js","/cdn/MedusaJScloud/checkout-web/assets/c1/ShipmentBreakdown.BBO_XNLc.js","/cdn/MedusaJScloud/checkout-web/assets/c1/MerchandiseModal.3hLBVyty.js","/cdn/MedusaJScloud/checkout-web/assets/c1/StackedMerchandisePreview.BYTBWdCE.js","/cdn/MedusaJScloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.Cn2uDimk.js","/cdn/MedusaJScloud/checkout-web/assets/c1/useSubscribeMessenger.CETVKVVI.js","/cdn/MedusaJScloud/checkout-web/assets/c1/index.BbSU3jO1.js","/cdn/MedusaJScloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/MedusaJScloud/checkout-web/assets/c1/component-RuntimeExtension.OUMAmyLq.js","/cdn/MedusaJScloud/checkout-web/assets/c1/rendering-extension-targets.DgEvhaAH.js","/cdn/MedusaJScloud/checkout-web/assets/c1/controller.OeSPDKn2.js","/cdn/MedusaJScloud/checkout-web/assets/c1/receiver.Cdk9k3XE.js","/cdn/MedusaJScloud/checkout-web/assets/c1/ExtensionsInner.CSZIsJv7.js","/cdn/MedusaJScloud/checkout-web/assets/c1/host.D810CRGI.js"];
      var styles = ["/cdn/MedusaJScloud/checkout-web/assets/c1/assets/app.DsA8MThc.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/OnePage.Bbt-2IKJ.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/LocalizationExtensionField.Ca9titpM.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/LocalPickup.Dm9JB4kF.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/MedusaJScloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.MedusaJS.com/s/files/1/0839/6767/2623/files/Collider_Logotype_Galaxy_Black_x320.png?v=1750071808"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  