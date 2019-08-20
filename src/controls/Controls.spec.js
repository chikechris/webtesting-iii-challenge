import React from "react";
import { render, fireEvent, cleanup } from '@testing-library/react';
import "jest-dom/extend-expect";

import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

afterEach(cleanup);

describe("<Controls />", () => {
  it("Matches snapshot", () => {
    const { container } = render(<Controls />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders expected initial state", () => {
    const { getByTestId } = render(<Dashboard />);
    const lock = getByTestId("lock-btn");
    const handle = getByTestId("handle-btn");

    expect(lock).toHaveTextContent("Lock Gate");
    expect(lock).toBeDisabled();
    expect(handle).toHaveTextContent("Close Gate");
    expect(handle).not.toBeDisabled();
  });

  it("Lock and Close as expected", () => {
    const { getByTestId } = render(<Dashboard />);
    const lock = getByTestId("lock-btn");
    const handle = getByTestId("handle-btn");

    //Close
    fireEvent.click(handle);
    expect(lock).toHaveTextContent("Lock Gate");
    expect(lock).not.toBeDisabled();
    expect(handle).toHaveTextContent("Open Gate");
    expect(handle).not.toBeDisabled();

    //Lock
    fireEvent.click(lock);
    expect(lock).toHaveTextContent("Unlock Gate");
    expect(lock).not.toBeDisabled();
    expect(handle).toHaveTextContent("Open Gate");
    expect(handle).toBeDisabled();
  });
});