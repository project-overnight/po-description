import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Description from '../src/modules/description';

// Enzyme.configure({ adapter: new Adapter(Description) });

// const wrapper = shallow(Description);

it("renders and doesn't crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Description />, div);
  ReactDOM.unmountComponentAtNode(div);
});
