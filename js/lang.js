(function () {
  const STORAGE_KEY = "8doktor-lang";
  const SUPPORTED = ["en", "tr"];

  const COPY = {
    en: {
      "nav.home": "Home",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.support": "Support",
      "footer.home": "Home",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.support": "Support",
      "footer.legal.privacy": "Privacy Policy",
      "footer.legal.terms": "Terms of Use",
      "title.index": "8 Doctors — Gentle Daily Coaching",
      "title.privacy": "Privacy Policy — 8 Doctors",
      "title.terms": "Terms of Use — 8 Doctors",
      "title.support": "Support — 8 Doctors",
      "meta.privacy": "Last updated: June 1, 2026 · App: 8 Doctors",
      "meta.support": "8 Doctors",
      "disclaimer.privacy":
        "This app does not provide medical diagnosis, treatment, or emergency services.",
      "disclaimer.terms":
        "8 Doctors is a wellness coaching app only. It is not a medical device and does not replace professional healthcare advice.",
      "disclaimer.support":
        "In a medical emergency, call your local emergency number. This app does not provide emergency services.",
      "h1.privacy": "Privacy Policy",
      "h1.terms": "Terms of Use",
      "h1.support": "Support",
      "lang.switcher": "Language",
    },
    tr: {
      "nav.home": "Ana sayfa",
      "nav.privacy": "Gizlilik",
      "nav.terms": "Kullanım",
      "nav.support": "Destek",
      "footer.home": "Ana sayfa",
      "footer.privacy": "Gizlilik",
      "footer.terms": "Kullanım",
      "footer.support": "Destek",
      "footer.legal.privacy": "Gizlilik Politikası",
      "footer.legal.terms": "Kullanım Koşulları",
      "title.index": "8 Doktor — Sakin Günlük Koçluk",
      "title.privacy": "Gizlilik Politikası — 8 Doktor",
      "title.terms": "Kullanım Koşulları — 8 Doktor",
      "title.support": "Destek — 8 Doktor",
      "meta.privacy": "Son güncelleme: 1 Haziran 2026 · Uygulama: 8 Doktor",
      "meta.support": "8 Doktor",
      "disclaimer.privacy":
        "Bu uygulama tıbbi tanı, tedavi veya acil durum hizmeti sunmaz.",
      "disclaimer.terms":
        "8 Doktor yalnızca bir wellness koçluk uygulamasıdır; tıbbi cihaz değildir ve profesyonel sağlık tavsiyesinin yerini almaz.",
      "disclaimer.support":
        "Acil tıbbi durumlarda yerel acil numarayı arayın. Bu uygulama acil hizmet sağlamaz.",
      "h1.privacy": "Gizlilik Politikası",
      "h1.terms": "Kullanım Koşulları",
      "h1.support": "Destek",
      "lang.switcher": "Dil",
    },
  };

  function resolveLang() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang && SUPPORTED.includes(queryLang)) {
      return queryLang;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) {
      return stored;
    }

    const browser = (navigator.language || "en").toLowerCase();
    return browser.startsWith("tr") ? "tr" : "en";
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) {
      return;
    }

    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-block").forEach(function (block) {
      block.classList.toggle("is-active", block.getAttribute("lang") === lang);
      block.hidden = block.getAttribute("lang") !== lang;
    });

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      const value = COPY[lang][key];
      if (value) {
        element.textContent = value;
      }
    });

    document.querySelectorAll(".lang-switcher button").forEach(function (button) {
      const isActive = button.dataset.lang === lang;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      button.classList.toggle("is-active", isActive);
    });

    document.querySelectorAll(".lang-switcher").forEach(function (switcher) {
      switcher.setAttribute("aria-label", COPY[lang]["lang.switcher"]);
    });

    const titleKey = document.body.dataset.pageTitle;
    if (titleKey && COPY[lang][titleKey]) {
      document.title = COPY[lang][titleKey];
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(resolveLang());

    document.querySelectorAll(".lang-switcher button").forEach(function (button) {
      button.addEventListener("click", function () {
        applyLang(button.dataset.lang);
      });
    });
  });
})();
