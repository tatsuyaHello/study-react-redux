# メモ
## JSX
- JSXはトランスパイルでJavaScriptのコードに変更される。
- 直感的にHTMLを記述することができる。
- `import React`はJSXを使用する場合は必要である。
- `React.Fragment`を利用することで、Reactの都合で必要になる`<div>`タグを削除できる。

## トランスパイル
- babelがJSXをJavaScriptのコードに暗黙的に変換してくている。

## webpack
- モジュールバンドラ
- 複数のjsファイルをまとめてbundle.jsとする。そのファイルを、scriptとしてHTMLから読み込む。

## state
- `setState`が実行されると、stateの値が更新されるだけではなく、再レンダリングもされる(最後に)。
- `setState`じゃない方法でstateを変える場合は、自分で再レンダリングをしなくてはいけない。

## redux
- `yarn add redux react-redux`

### action
- アプリケーションの中で何が起きたのかを表すデータのこと
- JavaScriptのオブジェクトのこと
- actionを返す関数のことをactionCreaterという

### reducer
- actionに組み込まれているtypeに応じて、状態をどう変化させるのかということを定義する。
- ここでいう状態はstateのことを表す。
