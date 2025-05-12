import { useEffect, useState, createContext } from "react";
import { IntlProvider } from "react-intl";

export const defaultLocale = "zh-CN";

export const supportedLocales = {
  "zh-CN": {
    name: "Chinese Simplified",
  },
  en: {
    name: "English",
  },
};

const getBrowserLocale = () => {
  if (typeof window === "undefined") return defaultLocale;

  const browserLang = window.navigator.language;

  if (Object.keys(supportedLocales).includes(browserLang)) {
    return browserLang;
  }
  // 匹配语言代码
  const languageCode = browserLang.split("-")[0];
  const match = Object.keys(supportedLocales).find((locale) =>
    locale.startsWith(languageCode),
  );
  return match || defaultLocale;
};

export const LocaleContext = createContext({
  locale: "",
  setLocale: () => {},
});

export default function I18n(props) {
  const [locale, setLocale] = useState(() => {
    // 检查是否在浏览器环境中 确保只在浏览器环境中操作 localStorage
    if (typeof window !== "undefined" && window.localStorage) {
      const savedLocale = localStorage.getItem("locale");
      // 如果没有保存的语言设置，使用浏览器语言
      return savedLocale || getBrowserLocale();
    }
    return defaultLocale;
  });
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("locale", locale);
    }

    setMessages(null);

    import(`@/i18n/lang/${locale}.json`)
      .then((messages_) => setMessages(messages_))
      .catch((err) =>
        console.error(`Error loading messages for locale ${locale}: `, err),
      );
  }, [locale]);

  return !messages ? null : (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
