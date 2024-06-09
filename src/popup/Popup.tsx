import { Checkbox, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

import { useKeywords } from "~/store/useKeywords";

document.body.className = "w-[20rem] h-[15rem]";

const Popup = () => {
  const { keywords, loadKeywords, addKeyword, removeKeyword } = useKeywords();

  useEffect(() => {
    // NOTE: ここでロードしないとチェックボックスに初期値が入らない
    loadKeywords();
  }, []);

  return (
    <VStack align="flex-start">
      <p>{String(keywords)}</p>
      <Checkbox
        isChecked={keywords.includes("個室")}
        onChange={(event) => {
          if (event.target.checked) {
            addKeyword("個室");
          } else {
            removeKeyword("個室");
          }
        }}
      >
        個室
      </Checkbox>
      <Checkbox
        isChecked={keywords.includes("創作")}
        onChange={(event) => {
          if (event.target.checked) {
            addKeyword("創作");
          } else {
            removeKeyword("創作");
          }
        }}
      >
        創作
      </Checkbox>
    </VStack>
  );
};

export default Popup;
