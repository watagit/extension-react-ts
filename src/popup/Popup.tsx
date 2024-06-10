import { Box } from "@chakra-ui/react";
import { type ChangeEvent, useEffect } from "react";

import { useKeywords } from "~/store/useKeywords";
import { KeywordSelector } from "./KeywordSelector";

document.body.className = "w-[20rem] h-[15rem]";

const Popup = () => {
  const { keywords, loadKeywords, addKeyword, removeKeyword } = useKeywords();

  useEffect(() => {
    // NOTE: ここでロードしないとチェックボックスに初期値が入らない
    loadKeywords();
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    keyword: string,
  ) => {
    // チェックボックスの状態変化と同時にContent側をリロードする
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id === undefined) return;
      chrome.tabs.sendMessage(tabs[0].id, { action: "reload" });
    });

    if (event.target.checked) {
      addKeyword(keyword);
    } else {
      removeKeyword(keyword);
    }
  };

  return (
    <Box p={4}>
      <KeywordSelector keywords={keywords} onChange={handleChange} />
    </Box>
  );
};

export default Popup;
