## 概要

普通な履歴書はPDFでのプレーンな文書ですので、あまり面白くありません。特に、あなたはフロントエンドディベロッパーなら、アニメージョンフォーマットのダータを作成するようにすべきです。

そのため、私わ単純にアニメージョン履歴書を作成できるプラグインを追加しました。
ここで異なる言語の履歴書を追加したいなら、新しいファイルを入れるだけです。
とても簡単ですね。

## 使い方

中国語の履歴書を書けば、下記のChinese.jsを直接変更することいいです。
<p align="center">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img width="500" src="./src/assets/image/2.png" alt="screenShot">
  </a>
</p>

他の言語文書を追加することも非常にシンプルにできます。対応のファイルを作成して、Vue中に導入するだけ。使用方法がChinese.jsと同じです
(もしくは、Chiense.jsをコピーして、中身を書き換えて、ファイル名を変更します)。

<p align="center">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img width="500" src="./src/assets/image/1.png" alt="screenShot">
  </a>
</p>

なお、Voice.jsも修正可能です、別のCSSを使用できます。より詳細はソースコードを参照してください。

<p align="center">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img width="500" src="./src/assets/image/3.png" alt="screenShot">
  </a>
</p>

## デも

[簡単なデモ](https://zhulinbin.github.io/resume_github_page/)

<p align="center">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img width="500" src="./src/assets/image/4.png" alt="screenShot">
  </a>
</p>

ちなみに、個人利用で作成するため、Chromeが推奨します。別のブラウザでテストが要です。
ブラウザでは表示する文書ですので、PDFファイルとして保存できます。ただし、今のバージョンのコードにこの機能が実装しません(すべてのページを保存すべきではない、右側のテキストだけです)。

## ライセンス

[MIT](http://opensource.org/licenses/MIT)