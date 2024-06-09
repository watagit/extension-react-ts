# Safe Dining Filter

Safe Dining Filter は、食べログなどのグルメサイト上に存在する地雷居酒屋を非表示にする Chrome 拡張機能です。

# インストール手順

(注) Safe Dining Filter は、2024 年 6 月 9 日時点で正式リリースされていません。ここでは、Chrome 拡張機能のデベロッパーモードを使用したインストール手順を説明します。

## ソースコードのダウンロード

拡張機能の本体であるソースコードをローカルマシンにダウンロードします。

1. 画面右の「Releases」をクリックします。

![alt text](/readme-image/releases.png)

2. 「safe-dining-filter.zip」をクリックします。

![alt text](/readme-image/zip.png)

3. ローカルマシンに safe-dining-filter.zip がダウンロードされるので、解凍します。

## Chrome の拡張機能ページへアクセス

Google Chrome を開き、chrome://extensions/ にアクセスします。

## デベロッパーモードの有効化

1. 右上のトグルをオンにして、デベロッパーモードを有効化します。

![alt text](/readme-image/developer-mode.png)

## 拡張機能の読み込み

2. 「パッケージ化されていない拡張機能を読み込む」をクリックします。

![alt text](/readme-image/import-unpackaged-extension.png)

3. 先ほど解凍したディレクトリを選択します。正常にインストールされている場合、拡張機能のリストに Safe Dining Filter が表示されます。

![alt text](/readme-image/extension-view.png)

# 使用方法

インストール後、食べログで店名に「個室」と含まれるお店が自動的に非表示になります。

| before                                | after                                |
| ------------------------------------- | ------------------------------------ |
| ![alt text](/readme-image/before.png) | ![alt text](/readme-image/after.png) |

# ロードマップ

今後は以下の機能追加を予定しています。

- 食べログ以外のグルメサイトへの対応
- 拡張機能のメニュー上でフィルタリングの有効無効を切り替える機能
- キーワードを自由に設定できる機能

詳しくは[ロードマップ](https://github.com/users/watagit/projects/1/views/1)を参照してください。
