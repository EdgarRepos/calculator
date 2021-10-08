import EqualSymbol from "./EqualSymbol";
import { shallow } from "enzyme";

describe("Equal Symbol", () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EqualSymbol />)
  });

  it("Should render", () => {
    const component = wrapper.find('data-test="equalSymbol"');
    expect(component.length).toBe(1);
  });
});
