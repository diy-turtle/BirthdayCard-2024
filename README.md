# BirthdayCard-2024
![GitHub License](https://img.shields.io/github/license/diy-turtle/BirthdayCard-2024)
![GitHub top language](https://img.shields.io/github/languages/top/diy-turtle/BirthdayCard-2024)
![GitHub Release](https://img.shields.io/github/v/release/diy-turtle/BirthdayCard-2024)

2024 年度用 Web 版バースデーカード。
![スクリーンショット](https://github.com/diy-turtle/BirthdayCard-2024/assets/163115290/746ed77a-2c8a-4daf-b99f-a0cea4307924)

## 特徴
- **安心・安全** : 送られた人の情報は、全て送られた人の端末上で編集・加工されるため、インターネットに情報がアップロードされることは絶対にありません。
- **軽量動作** : ページが軽量なため、ストレスなくカードの閲覧を楽しめます。
- **簡単編集** : 一度、送り主の情報を登録してしまえば、 URL を少し変更することでそれぞれの名前入りの Web 版バースデーカードが作成できます。

## 使い方
 1. **ファイルのダウンロードまたはクローン**
以下のいずれかの方法で、バースデーカードのファイルを自分のPCにダウンロードしてください。
    - ダウンロード
        - **https://github.com/diy-turtle/BirthdayCard-2024.git** から最新版のZIPファイルをダウンロードし、解凍します。
    - クローン
        - ターミナルまたはGit GUIツールを使って、以下のコマンドを実行します。
```
git clone https://github.com/diy-turtle/BirthdayCard-2024.git
```


2.  **公開ディレクトリへの配置**
ダウンロードまたはクローンしたファイルを、Webサーバーの公開ディレクトリに配置します。


例：
-   Apacheの場合：`/var/www/html/BirthdayCard-2024`
-   Nginxの場合：`/usr/share/nginx/html/BirthdayCard-2024`

3. **JavaScript ファイルの編集 (送り主の情報の登録)**
`script.js` を開き、以下の該当する箇所のを編集します。


    - **送り主の情報**
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
`index.html` にアクセスする為の `URL` に `#` をつけ、`誕生日の人の名前` , `送信日` を続けて入力します。
    - `誕生日の人の名前` : 誕生日の人の呼び名を入力します。
    - `送信日` : 送信した日を `YYYY.MM.DD 形式` を入力します。

例) `あい`さんに、 `2024年5月5日` に送信する場合
```
https://example.com/index.html#あい, 2024.05.05
```

5.  **URL の送信**
編集した URL を送信します。

## 動作確認環境 (https のみ)
- iPadOS 17.4.1 (Safari 604.1)
