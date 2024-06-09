import { useEffect } from "react";
import { useKeywords } from "~/store/useKeywords";

export const Content = () => {
  const { keywords, loadKeywords } = useKeywords();

  // 初期では食べログのみに対応
  const isTabelog = window.location.hostname === "tabelog.com";
  if (!isTabelog) return <></>;

  useEffect(() => {
    loadKeywords();

    // ポップアップからのリロード指示を受け取る
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "reload") {
        location.reload();
      }
    });
  }, []);

  const restaurantListElement = document.querySelectorAll(
    ".list-rst__rst-name a",
  );

  if (restaurantListElement === null) {
    console.log("店舗一覧を表す要素が見つかりません");
  }

  for (const restaurantElement of restaurantListElement) {
    if (restaurantElement.textContent === null) {
      console.error("店舗を表す要素が見つかりません");
      break;
    }

    // キーワードのいずれも店名に含まれていない場合は次の店舗へ
    if (
      !keywords.some((keyword) =>
        restaurantElement.textContent?.includes(keyword),
      )
    )
      continue;

    const parentElement = restaurantElement.closest(".list-rst");
    if (parentElement === null) {
      console.error("親要素が見つかりません");
      break;
    }

    // closest()からの返り値は型定義上Elementだが、
    // 実際はHTMLElementなのでキャストを許容する
    (parentElement as HTMLElement).style.display = "none";
  }

  return <></>;
};
