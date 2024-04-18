# boron-ui

## セットアップ

```
$ yarn add @studyplus/boron-ui
```

## 使い方

```
yarn add @studyplus/boron-ui
```

アプリケーションのトップのコンポーネントで boron-ui 共通の css をインポートする

```
import "@studyplus/boron-ui/dist/boron-ui.css"
```

## boron-ui の開発

### セットアップ

```
$ yarn
```

開発の作業は基本的に Storybook ベースで行なっている

```
$ yarn storybook
```

main ブランチの Storybook は下記 URL で公開されている。※アクセスには VPN 接続 or 踏み台経由になってることが必要。
http://boron-ui-storybook.s3-website-ap-northeast-1.amazonaws.com/

### publish する前に boron-web や boron-student から確認する

追加・修正した内容をマージして publish する前に boron-web や boron-student で確認したい時の手順

*boron-ui 側*のディレクトリで一度ビルドする

```
$ yarn build
```

boron-web or boron-student で念の為テスト用のブランチを作り、checkout して、一度`boron-ui`をアンインストール

```
$ yarn remove @studyplus/boron-ui
```

次に先ほどビルドした boron-ui のディレクトリを直接インストールする

```
$ yarn add [boron-uiのパス。`../boron-ui`など相対パスでもOK]
```

※ローカルの boron-ui をインストールした`package.json`を push しないように注意

元に戻すときは再度`package.json`から削除してインストールし直す

```
$ yarn remove @studyplus/boron-ui
$ yarn add @studyplus/boron-ui
```

### 公開してる Storybook の更新

公開してる Storybook の環境を作業ブランチの Storybook に更新したい場合、Github 上の Actions タブから upload_storybook のワークフローをブランチ指定して実行するとそのブランチの Storybook がアップロードされて以下の URL から見れるようになります。（注意：main ブランチにマージが入る度に自動で main ブランチで実行されます）
※アクセスには VPN 接続 or 踏み台経由になってることが必要。
http://boron-ui-storybook.s3-website-ap-northeast-1.amazonaws.com/

### パッケージの更新

機能追加・修正したものを`@studyplus/boron-ui`に反映する場合は`package.json`の `version`フィールドの数値をインクリメントする。忘れると更新内容がパッケージに反映されないので注意。

PR レビュー後、main マージすると CI で publish の job が走り、新しいバージョンでリリースされる

### アイコンファイルの管理

[SVGR](https://react-svgr.com/)を使って、svg -> React コンポーネント(.tsx) に変換してインラインで使用する。

Icon 変換の手順

- `assets/icons`に`*.svg`の元ファイルを配置する
- `yarn build-icons`を実行する
  - `src/Icon`配下にコンポーネントに変換された SVG アイコンが生成される

新しいアイコンの追加の場合は上記手順の後

```
$ yarn build
```

して`パッケージの更新`の手順を行って新バージョンとしてパッケージをリリースする

`svgo.config.js`が変換の際の設定ファイルになっている
