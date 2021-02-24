import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Date from '../../../components/date';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.append(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test('date renders', () => {
    act(() => {
        render(<Date dateString="2020-12-28" />, container);
    });

    const testComponent = container.querySelector('time');
    
    expect(testComponent.getAttribute('dateTime')).toBe('2020-12-28');
    expect(testComponent.textContent).toBe('December 28, 2020');
});
