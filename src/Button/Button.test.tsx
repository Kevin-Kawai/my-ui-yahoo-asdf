import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("Button", () => {
  const { container: c1 } = render(<Button>default</Button>);
  expect(c1).toMatchSnapshot();

  const { container: c2 } = render(
    <Button variant="filled" hoverVariant="outline" size="lg" gapSize="sm">
      sm
    </Button>
  );
  expect(c2).toMatchSnapshot();

  const { container: c3 } = render(
    <Button
      variant="outline"
      gapSize="md"
      hoverVariant="filled"
      withLeftIconLayoutSize="md"
      isRound
    >
      sm
    </Button>
  );
  expect(c3).toMatchSnapshot();

  const { container: c4 } = render(<Button isBlock>sm</Button>);
  expect(c4).toMatchSnapshot();
});
