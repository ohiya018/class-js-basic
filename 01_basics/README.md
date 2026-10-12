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
index   value.
0       'apple'.
1       'banana'.
// 1行コメント.
/*.
複数行コメント.
*/.
---
変数.
const name = 'imaizumi'; // 変数を宣言.
console.log(name); // 変数の確認.
※const name;だけでは値がないためエラーになる.
let name;
※constとは違い箱だけの宣言はできる、その場合後から入れる変数名を書かないといけない.
別例:
name = 'imaizumi';
使い分け.
const→値が変わらないもの(基本これ)、let→後から中身を上書き・変更するもの.
確認テストで'undefined'出る.
---
演算子.
console.log(6 + 9); //加法.
console.log(10 - 15); //減法.
console.log(3 * 7); //乗法.
console.log(10 / 5); //除法.
console.log(7 % 3); //剰余.
console.log(3 ** 2); //累乗.
自己代入演算子.
x = 2;<br>
x += 100;<br>
console.log(x);<br>
//インクリメント.
x++;<br>
console.log(x);<br>
<br>
// デクリメント.
x--;<br>
console.log(x);<br>
---
