# 01_基礎知識・変数・データ型

このフォルダには「01_基礎知識・変数・データ型」の授業用練習コードおよび課題データを保存します。

10/05(Mon)1限
<br>
<br>
01.console.log<br>
コンソール画面にデータやメッセージを出力する命令<br>
例:console.log('js!, 123, あいうえお')
---
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
<br>
変数
<br>
const name = 'imaizumi'; // 変数を宣言<br>
console.log(name); // 変数の確認<br>
※const name;だけでは値がないためエラーになる<br>
<br>
let name;<br>
※constとは違い箱だけの宣言はできる、その場合後から入れる変数名を書かないといけない<br>
name = 'imaizumi';<br>
<br>
使い分け<br>
const→値が変わらないもの(基本これ)、let→後から中身を上書き・変更するもの