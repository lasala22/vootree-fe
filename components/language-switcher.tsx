"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const switchLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/${lang}${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("vi")} disabled={locale === "vi"}>
        Tiếng Việt
      </button>
      <button onClick={() => switchLanguage("en")} disabled={locale === "en"}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
