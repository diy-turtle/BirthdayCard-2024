// 送り主の情報
const NAME = "Pasubu.book";
const ACCOUNT_NAME = "@pasububook";
const SNS_ACCOUNT_LINK = "https://github.com/pasububook";

// 送り主の情報の変更
var from_name_content = document.getElementById("from_name");
if (NAME) {
    from_name_content.innerHTML = NAME;
}

var account_name_content = document.getElementById("sns_link");
if (ACCOUNT_NAME) {
    account_name_content.innerHTML = ACCOUNT_NAME;
}
if (SNS_ACCOUNT_LINK) {
    account_name_content.href = SNS_ACCOUNT_LINK;
}

// 誕生日に関連するデータ
function apply_birthday_data(){
    // 誕生日の人の情報を取得
    const url = decodeURIComponent(window.location.href);
    const raw_birthday_data = url.split("#")[1];

    var birthday_data = []
    if (raw_birthday_data) {
        birthday_data = raw_birthday_data.split(",");
        console.log(birthday_data);
    }

    // 誕生日の人用にデータを変更
    var friend_name_content = document.getElementById("friend_name");
    if (birthday_data[0]) {
        friend_name_content.textContent = birthday_data[0];
    }

    var birthday_date_content = document.getElementById("birthday_date");
    if (birthday_data[1]) {
        birthday_date_content.textContent = birthday_data[1];
    }
}

window.onload = apply_birthday_data;
