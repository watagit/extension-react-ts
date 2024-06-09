import { Checkbox, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useKeywords } from "../store/useKeyword";

document.body.className = "w-[20rem] h-[15rem]";

const Popup = () => {
  const [checkedKeywords, setCheckedKeywords] = useState<boolean[]>([
    true,
    false,
  ]);
  const { keywords, addKeyword, removeKeyword } = useKeywords();

  return (
    <VStack align="flex-start">
      <p>{String(keywords)}</p>
      <Checkbox
        isChecked={checkedKeywords[0]}
        onChange={
          (event) => {
            if (event.target.checked) {
              addKeyword("個室");
            } else {
              removeKeyword("個室");
            }
            setCheckedKeywords([event.target.checked, checkedKeywords[1]])
          }
        }
      >
        個室
      </Checkbox>
      <Checkbox
        isChecked={checkedKeywords[1]}
        onChange={(event) => {
            if (event.target.checked) {
              addKeyword("創作");
            } else {
              removeKeyword("創作");
            }
          setCheckedKeywords([checkedKeywords[0], event.target.checked])
        }
        }
      >
        創作
      </Checkbox>
    </VStack>
  );
};

export default Popup;
