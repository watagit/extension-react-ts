const main = () => {
  const storeListElement = document.querySelectorAll(".list-rst__rst-name a");

  // 初期段階では食べログのみ対応する
  const isTabelog = window.location.hostname === "tabelog.com";
  if (!isTabelog) return;

  if (storeListElement === null) {
    console.log("店舗一覧を表す要素が見つかりません");
  }

  for (const storeElement of storeListElement) {
    if (storeElement.textContent === null) {
      console.error("店舗を表す要素が見つかりません");
      break;
    }

    if (!storeElement.textContent.includes("個室")) continue;

    const parentElement = storeElement.closest(".list-rst");
    if (parentElement === null) {
      console.error("親要素が見つかりません");
      break;
    }

    // closest()からの返り値は型定義上Elementだが、
    // 実際はHTMLElementなのでキャストを許容する
    (parentElement as HTMLElement).style.display = "none";
  }
};

main();
