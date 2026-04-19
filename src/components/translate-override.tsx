"use client";

import { glossary, type GlossaryTerm } from "@/lib/glossary";
import { useIsChinese } from "@/components/language-switcher";

export function T({ term }: { term: GlossaryTerm }) {
  const isChinese = useIsChinese();

  return (
    <span className="notranslate" translate="no">
      {isChinese ? glossary[term] : term}
    </span>
  );
}
