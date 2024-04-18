import "../src/styles/tailwind.css";
/**
 * boron-webと見た目が同じになるようにboron-webから共通CSSをコピペしたものを読ませている
 * boron-studentもboron-webからのコピペなので同じ見た目になるはず
 * TODO: 共通CSSもboron-uiから配布した方がよい
 */
import "!style-loader!css-loader!sass-loader!./boron-web-normalize.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
