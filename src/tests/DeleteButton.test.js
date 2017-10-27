import React from 'react';
import ReactDOM from 'react-dom';
import DeleteButton from '../components/DeleteButton';
import userManagementDeleteButton from '../reducers'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DeleteButton component',()=>{
    const initialState = {userId:100}
    const mockStore = configureStore()
    let container

    const component = renderer.create(
        <DeleteButton userId={100} onClick={()=> true}/>
    );

    beforeEach(()=>{
        container = shallow(<DeleteButton userId={100} onClick={()=> true} /> )  
    })

    it('render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check className matches', () => {
        expect(component.toJSON().props.className).toEqual('btn btn-default btn-delete')
    });

});
