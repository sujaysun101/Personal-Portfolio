import React, { useEffect, useState } from 'react';

// We keep a window-scoped flag to detect whether the popup has already been shown
// during this single-page-app session. On a full page reload this flag is cleared
// so the popup will show again. This prevents the popup from re-opening when the
// user navigates within the app or switches tabs.
declare global {
  interface Window { __subscribePopupShownThisLoad?: boolean }
}

const SubscribePopup: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only show on a full page load. If window.__subscribePopupShownThisLoad is true,
    // that means we've already shown it during this browser tab's SPA lifetime.
    if (window.__subscribePopupShownThisLoad) return;

    // Avoid showing when the document is not visible (e.g., user switched tabs)
    if (document.visibilityState !== 'visible') {
      // Wait until the document becomes visible to show it
      const onVisible = () => {
        if (document.visibilityState === 'visible') {
          setTimeout(() => setVisible(true), 600);
          window.__subscribePopupShownThisLoad = true;
          document.removeEventListener('visibilitychange', onVisible);
        }
      };
      document.addEventListener('visibilitychange', onVisible);
      return () => document.removeEventListener('visibilitychange', onVisible);
    }

    // Normal show path: short delay then show
    const t = setTimeout(() => {
      setVisible(true);
      window.__subscribePopupShownThisLoad = true;
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    // Do not persist close across full reloads; only mark for this load so it won't
    // re-open during SPA navigation.
    window.__subscribePopupShownThisLoad = true;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder behavior
    alert('Thanks — subscription submitted (stub)');
    close();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 max-w-full">
      <div className="glass rounded-lg p-4 shadow-xl border border-purple-800 bg-black/80 relative">
        <button
          aria-label="Close subscribe popup"
          onClick={close}
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
        >
          ×
        </button>
        <h3 className="text-lg font-bold text-center text-purple-300 mb-2">Stay Updated</h3>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="bg-gray-900/60 border border-purple-700 rounded px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number (optional)"
            className="bg-gray-900/60 border border-purple-700 rounded px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex items-center gap-2 mt-1">
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded text-sm transition-all duration-200 flex-1 text-center">Subscribe</button>
            <button type="button" onClick={close} className="text-xs text-gray-400">Close</button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-1">Unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  );
};

export default SubscribePopup;
