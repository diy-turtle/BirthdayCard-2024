# BirthdayCard-2024
2024 年度用 Web 版バースデーカード
![スクリーンショット]()

## 使い方
 1. **ファイルのダウンロードまたはクローン**
以下のいずれかの方法で、バースデーカードのファイルを自分のPCにダウンロードしてください。
    - ダウンロード
        - https://example.com から最新版のZIPファイルをダウンロードし、解凍します。
    - クローン
        - ターミナルまたはGit GUIツールを使って、以下のコマンドを実行します。
```
git clone https://github.com/example/BirthdayCard-2024.git
```


2.  **公開ディレクトリへの配置**
ダウンロードまたはクローンしたファイルを、Webサーバーの公開ディレクトリに配置します。


例：
-   Apacheの場合：`/var/www/html/BirthdayCard-2024`
-   Nginxの場合：`/usr/share/nginx/html/BirthdayCard-2024`

3. **JavaScript ファイルの編集**
`script.js` を開き、以下の該当する箇所のを編集します。
    - `NAME` : バースデーカードを送る人の名前を入力します。
    - `ACCOUNT_NAME` : バースデーカードを送る人の SNS のアカウント ID を入力します。
    - `SNS_ACCOUNT_LINK` : バースデーカードを送る人の SNS のリンクを入力します。

例):
送り主の名前が `Pasubu.book` で、送り主のアカウント ID が`pasububook`で、送り主の SNS アカウントのリンクが`https://github.com/pasububook`の時
```js
// 送り主の情報
const NAME = “Pasubu.book”;
const ACCOUNT_NAME = “@pasububook”;
const SNS_ACCOUNT_LINK = “https://github.com/pasububook”;
```

4. **URL の編集**
index.html#`誕生日の人の名前`, `誕生日` 
```
例) 「あい」に 2024年5月5日 に送信する場合
https://example.com/index.html#あい, 2024.05.05
```

6. 先ほど編集された URL を送信する

## 動作確認環境
- iPadOS 17.4.1(Safari 604.1)
- Android 14(Chrome)
