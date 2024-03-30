// 送り主の情報
const NAME = "name";
const ACCOUNT_NAME = "@account_naem";
const SNS_ACCOUNT_LINK = "https://example.com";

// 送り主の情報の変更
var from_name_content = document.getElementById("from_name");
from_name_content.innerHTML = NAME;

var account_name_content = document.getElementById("sns_link");
account_name_content.innerHTML = ACCOUNT_NAME;
account_name_content.href = SNS_ACCOUNT_LINK;
