import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { renderHook, act } from '@testing-library/react-hooks'
import { StudentRegistration } from "./";
import { useSelector } from "react-redux";


Enzyme.configure({ adapter: new Adapter() });

const init = () => {
    const initialState = {
        formIsNew: true,
        firstName: '',
        surname: '',
        password: '',
        confirmpassword: '',
        age: '',
        email: '',
        sex: '',
        speciality: ''
    };
    const mockStore = configureStore();
    let store = mockStore({student:initialState});
    const wrapper = mount(<Provider store={store}><StudentRegistration/></Provider>);
    return {
        store,
        wrapper
    }
};

describe('Student Registration Form', () => {
    const { wrapper } = init();

    const fields = ['firstName', 'surname', 'password', 'confirmpassword', 'age',
        'email', 'sex', 'speciality'];
    for (let field of fields) {
        it(`Has ${field}`, () => {
            expect(wrapper.find(field)).not.toBeNull();
        });
    }

    it('Has errors on empty submit', () => {
        wrapper.find('submit').click();
        console.log(wrapper.find('firstName').className);
    });
});




    /*
    test('enter value', () => {
        const source = 0;
        const returnedData = renderHook(() => useCounterManager(source));
        const prevCount = returnedData.result.current.count;
        const increase = returnedData.result.current.increase;
        const incrementedValue = prevCount + 1;
        act(increase);
        const receivedValue = returnedData.result.current.count;
        expect receivedValue.toBe(incrementedValue);
    });
    */
//});
