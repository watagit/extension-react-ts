import { Checkbox, VStack } from "@chakra-ui/react";
import { type ChangeEvent, useEffect } from "react";

import { useKeywords } from "~/store/useKeywords";

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
    if (event.target.checked) {
      addKeyword(keyword);
    } else {
      removeKeyword(keyword);
    }
  };

  return (
    <VStack align="flex-start">
      <Checkbox
        isChecked={keywords.includes("完全個室")}
        onChange={(event) => handleChange(event, "完全個室")}
      >
        完全個室
      </Checkbox>
      <Checkbox
        isChecked={keywords.includes("和風創作")}
        onChange={(event) => handleChange(event, "和風創作")}
      >
        和風創作
      </Checkbox>
      <Checkbox
        isChecked={keywords.includes("肉寿司")}
        onChange={(event) => handleChange(event, "肉寿司")}
      >
        肉寿司
      </Checkbox>
      <Checkbox
        isChecked={keywords.includes("肉バル")}
        onChange={(event) => handleChange(event, "肉バル")}
      >
        肉バル
      </Checkbox>
    </VStack>
  );
};

export default Popup;
