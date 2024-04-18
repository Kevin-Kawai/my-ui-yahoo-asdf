module.exports = {
  plugins: [
    "removeTitle",
    "removeDesc",
    {
      name: "prefixIds",
      params: {
        prefix: (_, info) => {
          // svg内のIDがグローバルなため、コンフリクトするのを防ぐ
          // コンフリクトすると意図しないSVGがロードされる可能性がある
          // idが`boron-ui__[SVGファイル名]__[元々のID]に変換される
          const array = info.path.split("/");
          const filename = array[array.length - 1];
          const uniquePath = filename.replace(".svg", "");
          return `boron-ui__${uniquePath}`;
        },
      },
    },
    {
      type: "visitor",
      name: "replace-fill-current-color",
      fn: () => {
        // fillアトリビュートの中身をcurrentColorに書き換え
        return {
          element: {
            enter: (node) => {
              if (node.attributes && node.attributes.fill) {
                node.attributes.fill = "currentColor";
              }
            },
          },
        };
      },
    },
  ],
};
