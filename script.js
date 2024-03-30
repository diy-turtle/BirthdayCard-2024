// 送り主の情報
const NAME = "Pasubu.book";
const ACCOUNT_NAME = "@pasububook";
const SNS_ACCOUNT_LINK = "https://example.com";

// 送り主の情報の変更
var from_name_content = document.getElementById("from_name");
from_name_content.innerHTML = NAME;

var account_name_content = document.getElementById("sns_link");
account_name_content.innerHTML = ACCOUNT_NAME;
account_name_content.href = SNS_ACCOUNT_LINK;

// 誕生日に関連するデータ
function apply_birthday_data(){
    // 誕生日の人の情報を取得
    const url = window.location.href;
    const raw_birthday_data = url.split("#")[1];

    var birthday_data = []
    if (raw_birthday_data) {
        raw_birthday_data = decodeURIComponent(raw_birthday_data);

        birthday_data = raw_birthday_data.split(",");
        console.log(birthday_data);
    }

    // 誕生日の人用にデータを変更
    var friend_name_content = document.getElementById("friend_name");
    friend_name_content.textContent = birthday_data[0];
}

window.onload = apply_birthday_data;
