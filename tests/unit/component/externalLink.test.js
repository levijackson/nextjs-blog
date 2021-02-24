import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ExternalLink from '../../../components/externalLink';


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


test('anchor tag generates', () => {
    const expectedHref = 'https://www.google.com';
    const expectedTitle = 'Google';
    const expectedChildren = 'Google';
    
    act(() => {
        render(<ExternalLink href={expectedHref} title={expectedTitle}>{expectedChildren}</ExternalLink>, container);
    });

    const testComponent = container.querySelector('a');
    
    expect(testComponent.getAttribute('href')).toBe(expectedHref);
    expect(testComponent.getAttribute('target')).toBe('_blank');
    expect(testComponent.getAttribute('title')).toBe(expectedTitle);
    expect(testComponent.textContent).toBe(expectedChildren);
});
