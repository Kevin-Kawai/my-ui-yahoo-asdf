export const getBoronUICustomPropertyValue = (variableName: string): string => {
  const rootElement = document.querySelector(":root") as HTMLElement | null;

  if (!rootElement) {
    throw "root element is null";
  }

  const value = getComputedStyle(rootElement).getPropertyValue(
    `--bui-${variableName}`
  );

  // 実行時にエラーにして気付けるようにしているが、型定義ができるとなおよさそう
  if (!value) {
    throw `cannot get custom property value, ${variableName} is not defined.`;
  }

  return value;
};
