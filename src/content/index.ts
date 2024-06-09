const main = () => {
  // 初期段階では食べログのみ対応する
  const isTabelog = window.location.hostname === "tabelog.com";
  if (!isTabelog) return;

  const restaurantListElement = document.querySelectorAll(".list-rst__rst-name a");

  if (restaurantListElement === null) {
    console.log("店舗一覧を表す要素が見つかりません");
  }

  for (const restaurantElement of restaurantListElement) {
    if (restaurantElement.textContent === null) {
      console.error("店舗を表す要素が見つかりません");
      break;
    }

    if (!restaurantElement.textContent.includes("個室")) continue;

    const parentElement = restaurantElement.closest(".list-rst");
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
