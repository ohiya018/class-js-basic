# 1年後期授業「JavaScript基礎」課題リポジトリ 💻

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Webフロントエンド開発の土台となる **Vanilla JavaScript（ピュアJavaScript）** の文法・DOM操作・イベントハンドリング・非同期処理を体系的に学ぶための実践課題リポジトリです。
ライブラリやフレームワークに依存せず、ブラウザ標準のJavaScript APIを活用したUIの実装力を身につけることを目的としています。

---

## 📚 カリキュラム・課題一覧

各単元のフォルダ内に、学習コードおよび課題実装を格納しています。

- [ ] **[01_basics](./01_basics)**: 基礎知識・変数・データ型
- [ ] **[02_dom](./02_dom)**: DOMの取得と要素の書き換え
- [ ] **[03_events](./03_events)**: イベント処理とクラス操作（UI切り替え）
- [ ] **[04_conditions](./04_conditions)**: 条件分岐と属性操作
- [ ] **[05_arrays_loops](./05_arrays_loops)**: 配列と繰り返し処理
- [ ] **[06_math_random](./06_math_random)**: ループの応用とMathオブジェクト
- [ ] **[07_functions](./07_functions)**: 関数の定義と引数・戻り値の活用
- [ ] **[08_traversal](./08_traversal)**: DOMトラバーサルとイベント委譲（Event Delegation）
- [ ] **[09_timers](./09_timers)**: タイマー処理とアニメーション（setInterval / requestAnimationFrame）
- [ ] **[10_objects](./10_objects)**: オブジェクト構造とHTMLの動的生成
- [ ] **[11_scroll_date](./11_scroll_date)**: 組み込みオブジェクトとスクロール演出
- [ ] **[12_forms](./12_forms)**: フォーム操作とリアルタイムバリデーション

---

## 💡 特に工夫した点・学んだこと（自己PR）

<!--
【学生記入欄】
課題に取り組む中で「特にこだわった実装」「難しかったが解決できた点」などを自由に記載してください。
就職活動時のポートフォリオとしてアピールポイントになります。
-->

- **例: 08_traversal (イベント委譲)**:
  動的に追加されるリスト要素に対して、親要素でイベントを監視する「イベント委譲」を活用し、パフォーマンスと保守性を意識したコードにしました。
- **例: 12_forms (バリデーション)**:
  送信ボタン押下時だけでなく、入力中の `input` イベントでリアルタイムにエラー表示を切り替えるUXを意識しました。

---

## 🛠️ 環境・動作確認方法

特別なビルドツールは不要です。ブラウザで各ディレクトリの `index.html` を直接開くか、VS Codeの拡張機能「Live Server」等で実行できます。

1. 本リポジトリを Fork してローカル環境にクローンします。
   ```bash
   git clone https://github.com/ohiya018/class-js-basic.git
   ```
2. 対象課題のディレクトリを開き、`index.html` をブラウザで確認しながら実装します。

---

## 📝 課題提出フロー（学生向け）

1. 本リポジトリを自身の GitHub アカウントに **Fork** します。
2. 課題ごとに適切なコミットメッセージを残しながら作業を進めます。
3. 完了したら自身の GitHub リポジトリへ Push します。