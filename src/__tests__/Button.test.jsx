import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button/Button";

describe("Button component", () => {
  it("should render the text", () => {
    render(<Button text="hello" />);
    const button = screen.getByRole("button", { name: "hello" });
    expect(button).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button text="hello" onClick={onClick} />);
    const button = screen.getByRole("button", { name: "hello" });

    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
