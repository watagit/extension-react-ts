import { Checkbox, VStack } from "@chakra-ui/react";
import { useState } from "react";

document.body.className = "w-[20rem] h-[15rem]";

const Popup = () => {
  const [checkedKeywords, setCheckedKeywords] = useState<boolean[]>([
    true,
    false,
  ]);

  return (
    <VStack align="flex-start">
      <Checkbox
        isChecked={checkedKeywords[0]}
        onChange={(event) =>
          setCheckedKeywords([event.target.checked, checkedKeywords[1]])
        }
      >
        個室
      </Checkbox>
      <Checkbox
        isChecked={checkedKeywords[1]}
        onChange={(event) =>
          setCheckedKeywords([checkedKeywords[0], event.target.checked])
        }
      >
        創作
      </Checkbox>
    </VStack>
  );
};

export default Popup;
