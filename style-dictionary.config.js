/**
 * tailwind.base.configのデザイントークンの内容と同じ内容のCSS Custom Propertiesを作って
 * CSS Modulesを使用しても同じスタイルルールが使えるようにする
 */

const fsDesignTokens = require("./src/config/tailwind.base.config");

// style-dictionaryでCSSにコンバートするために
// tailwindのconfig -> style-dictionaryが解釈できるDesignTokenのフォーマットにする
const convertTailwindToDesignTokenJSON = (obj) => {
  const newObj = {};
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      newObj[key] = convertTailwindToDesignTokenJSON(obj[key]);
      continue;
    }
    newObj[key] = { value: obj[key] };
  }
  return newObj;
};

// tailwindのconfigで使われる"extend"というフィールド名は不要なので消す
module.exports = {
  tokens: convertTailwindToDesignTokenJSON(fsDesignTokens.baseConfig.theme),
  format: {
    tweakTailwindKeys: ({ dictionary }) => {
      const values = dictionary.allTokens
        .map(
          (token) => `--${token.name.replace(/extend-/, "")}: ${token.value}`
        )
        // prettierでカラー指定の際に、大文字か小文字を合わせる必要がある
        .map((cssRuleLine) => `  ${cssRuleLine.toLowerCase()};\n`)
        .join("");
      return `:root {\n${values}}\n`;
    },
  },
  platforms: {
    css: {
      transformGroup: "scss",
      buildPath: "./src/styles/",
      prefix: "bui",
      files: [
        {
          format: "tweakTailwindKeys",
          destination: "variables.scss",
        },
      ],
    },
  },
};
