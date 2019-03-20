import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from "../../../../utils/testing/testUtils"
import Gig from './Gig';

describe('Gig component', () => {
	it('should render', () => {
		const gigData = {band: 'Test band', date: '0000-00-00 00:00:00', venue: 'Test Venue', artistInfo:{artist:{tags:{tag:[{name:'test tag'}]}}}}
		const wrapper = shallow(<Gig gig={gigData} />);
		const component = findByTestAttr(wrapper, 'component-gig');
		expect(component.length).toBe(1);
	});
});