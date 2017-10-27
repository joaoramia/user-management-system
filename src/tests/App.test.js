import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import userManagementApp from '../reducers'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component',()=>{
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<App/> )  
    })

    it('render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

});
