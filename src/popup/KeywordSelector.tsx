import { Checkbox, VStack } from "@chakra-ui/react";
import type { ChangeEvent, FC } from "react";

type Props = {
  keywords: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>, keyword: string) => void;
};

export const KeywordSelector: FC<Props> = ({ keywords, onChange }) => {
  return (
    <VStack align="flex-start" p={4}>
      <Checkbox
        isChecked={keywords.includes("完全個室")}
        onChange={(event) => onChange(event, "完全個室")}
      >
        完全個室
      </Checkbox>
      <Checkbox
        isChecked={keywords.includes("和風創作")}
        onChange={(event) => onChange(event, "和風創作")}
      >
        和風創作
      </Checkbox>
      <Checkbox
        isChecked={keywords.includes("肉寿司")}
        onChange={(event) => onChange(event, "肉寿司")}
      >
        肉寿司
      </Checkbox>
      <Checkbox
        isChecked={keywords.includes("肉バル")}
        onChange={(event) => onChange(event, "肉バル")}
      >
        肉バル
      </Checkbox>
    </VStack>
  );
};
