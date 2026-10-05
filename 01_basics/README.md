# 01_基礎知識・変数・データ型

このフォルダには「01_基礎知識・変数・データ型」の授業用練習コードおよび課題データを保存します。

10/05(Mon)1限
<br>
<br>
01.console.log<br>
コンソール画面にデータやメッセージを出力する命令<br>
例:console.log('js!, 123, あいうえお')
<br>
---
<br>
console.warn('warn');
注意、警告メッセージ

console.error('error');
エラーメッセージ

console.table(['apple', 'banana']);
テーブル形式で出力<br>
↓みたいな感じにコンソールに表示<br>
index   value<br>
0       'apple'<br>
1       'banana'
<br>
<br>
// 1行コメント
<br>
/*
複数行コメント
*/
<br>
---
変数
<br>
const name = 'imaizumi'; // 変数を宣言<br>
console.log(name); // 変数の確認<br>
※const name;だけでは値がないためエラーになる<br>
<br>
let name;<br>
※constとは違い箱だけの宣言はできる、その場合後から入れる変数名を書かないといけない<br>
別例:
name = 'imaizumi';<br>
<br>
使い分け<br>
const→値が変わらないもの(基本これ)、let→後から中身を上書き・変更するもの<br>
<br>
確認テストで'undefined'出る
<br>
---
演算子
<br>
console.log(6 + 9); //加法<br>
console.log(10 - 15); //減法<br>
console.log(3 * 7); //乗法<br>
console.log(10 / 5); //除法<br>
console.log(7 % 3); //剰余<br>
console.log(3 ** 2); //累乗<br>

自己代入演算子<br>
x = 2;<br>
x += 100;<br>
console.log(x);<br>

//インクリメント<br>
x++;<br>
console.log(x);<br>
<br>
// デクリメント<br>
x--;<br>
console.log(x);<br>