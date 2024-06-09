import { Checkbox, VStack } from "@chakra-ui/react";
import { getBucket } from "@extend-chrome/storage";
import { useEffect, useState } from "react";

document.body.className = "w-[20rem] h-[15rem]";

type Bucket = {
  keywords: string[];
};

const bucket = getBucket<Bucket>("my_bucket", "local");

const Popup = () => {
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    async () => {
      const value = await bucket.get();
      if (value.keywords) {
        setKeywords(value.keywords);
      }
    };
  }, []);

  const addKeyword = (keyword: string) => {
    const newKeywords = [...keywords, keyword];
    bucket.set({ keywords: newKeywords });
    setKeywords(newKeywords);
  };

  const removeKeyword = (keyword: string) => {
    const newKeywords = keywords.filter((k) => k !== keyword);
    bucket.set({ keywords: newKeywords });
    setKeywords(newKeywords);
  };

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
