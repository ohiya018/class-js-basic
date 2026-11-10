# 05_配列と繰り返し処理

このフォルダには「05_配列と繰り返し処理」の授業用練習コードおよび課題データを保存します。

/*
() 丸括弧もしくはパーレン
[] 角括弧もしくはブラケット
{} 波括弧もしくは中括弧
*/

/*
arr.shift() 先頭を一つ削除
arr.pop() 末尾を一つ削除
arr.splice(start, count) 指定位置から削除・置換
*/

for文の最初のlet忘れずに！

let calendar = '';
calendar += '<table>';
for(let i = 1; i <= 31; i++){
    calendar += `<td>${i}日</td>`;
}
calendar += '<table>';
menuList.innerHTML = calendar;
---
NodeList 配列のような形
複数要素を取得できる↓
getElementsByClassName()
getElementByTagnName()
これらをまとめてquerySelectorAll()で取得できる
