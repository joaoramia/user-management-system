import React from 'react';
import ReactDOM from 'react-dom';
import DeleteButton from '../components/DeleteButton';
import userManagementDeleteButton from '../reducers'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('DeleteButton --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {userId:100}
    const mockStore = configureStore()
    let container

    const component = renderer.create(
        <DeleteButton userId={100} />
    );

    beforeEach(()=>{
        container = shallow(<DeleteButton userId={100} /> )  
    })

    it('render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check className matches', () => {
        expect(component.toJSON().props.className).toEqual('btn btn-default')
    });

});
