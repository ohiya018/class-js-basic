# 03_イベント処理とクラス操作

このフォルダには「03_イベント処理とクラス操作」の授業用練習コードおよび課題データを保存します。
---

## イベント処理の基本と復習

### 1. クリックイベントの復習

>JavaScriptに「〜したときに、この処理を実行してね」と教え込む命令を イベントリスナー（addEventListener） と呼びます。

↓↓↓前回の復習コード↓↓↓

const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'ボタンがクリックされました。';
    mainTitle.style.color = '#e67e22';
});

### 2. 画面全体を監視する：スクロールイベント(scroll)

>イベントはボタンなどの特定のHTML要素だけでなく、**ブラウザのウィンドウ全体（`window`）** に対しても設定できます。

その代表例が、ページがスクロールされた瞬間を監視する **`'scroll'` イベント** です。

>**【スクロール量の取得：`window.scrollY` 】**

現在ページが上から何ピクセルスクロールされているかは、**`window.scrollY`** という値で取得できます。

window.addEventListener('scroll', () => {
  console.log(`現在のスクロール量: ${window.scrollY}px`);
});

### 3. 画面の読み込み完了を監視する：ロードイベント(load)

>ブラウザがHTMLやCSS、画像などの全リソースを読み込み終わった瞬間に発生するのが 'load' イベント** です。

window.addEventListener('load', () => {
  console.log('ページの読み込みが完了しました！');
});

### 4. ウィンドウサイズを監視する：リサイズイベント(resize)

>もう1つの重要な全体イベントが、ブラウザのウィンドウサイズが変更された瞬間に発生する 'resize' イベント です。

>**【現在のウィンドウ幅の取得：`window.innerWidth` 】**

現在開いているブラウザの内側の横幅（ピクセル数）は、**`window.innerWidth`** で取得できます。

window.addEventListener('resize', () => {
  console.log(`現在のブラウザ幅: ${window.innerWidth}px`);
});

## クラス名の操作
>ここまで、`element.style` を使って文字色や背景色、回転などをJavaScriptから直接書き換えてきました。

しかし、実際のWeb制作現場では**「あらかじめCSSにクラスを定義しておき、JavaScriptからはそのクラスを付け外しする」** という手法が標準として使われます。
