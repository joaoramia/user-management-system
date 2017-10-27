import React from 'react';
import ReactDOM from 'react-dom';
import Group from '../components/Group';
import userManagementApp from '../reducers'
import configureStore from 'redux-mock-store'
import { createStore } from 'redux'
import { shallow } from 'enzyme';

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Group userId={0} hideDelete={false} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });
});