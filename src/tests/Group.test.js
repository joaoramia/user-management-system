import React from 'react';
import ReactDOM from 'react-dom';
import Group from '../components/Group';
import userManagementApp from '../reducers'
import configureStore from 'redux-mock-store'
import { createStore } from 'redux'
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Group component',()=>{
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Group userId={0} hideDelete={false} id={0} name={'test'} description={'testing'} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });
});