import { atom, useAtom } from "jotai";

const keywordsAtom = atom(["個室"]);

export const useKeywords = () => {
  const [keywords, setKeywords] = useAtom(keywordsAtom);

  const addKeyword = (keyword: string) => {
    setKeywords((prev) => [...prev, keyword]);
  };

  const removeKeyword = (keyword: string) => {
    if (!keywords.includes(keyword)) {
      throw new Error("キーワードが見つかりませんでした");
    }

    const filteredKeywords = keywords.filter((k) => k !== keyword);
    setKeywords(filteredKeywords)
  };

  return { keywords, addKeyword, removeKeyword };
};
