import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import userManagementApp from '../reducers'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';

describe('APP --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
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
