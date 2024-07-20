"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Switch } from "antd";
import { useEffect, useState } from "react";

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [checked, setChecked] = useState(locale === "en");

  const switchLanguage = (checked: boolean) => {
    const lang = checked ? "en" : "vi";
    const params = new URLSearchParams(searchParams.toString());
    let newPath = `/${lang}${pathname}`;
    if (!checked) {
      newPath = pathname.startsWith("/en") ? pathname.slice(3) : pathname;
    }
    router.push(`${newPath}?${params.toString()}`);
  };

  useEffect(() => {
    setChecked(locale === "en");
  }, [locale]);

  return (
    <div>
      <Switch
        checked={checked}
        onChange={switchLanguage}
        checkedChildren="English"
        unCheckedChildren="Tiếng Việt"
      />
    </div>
  );
};

export default LanguageSwitcher;
