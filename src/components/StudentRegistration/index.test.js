import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { renderHook } from '@testing-library/react-hooks'
import { StudentRegistration } from "./";


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


describe('Student Registration: Form has all fields', () => {
    const { store, wrapper } = init();
    const state = renderHook(() => store.getState(store));
    const studentData = state.result.current.student;

    const fields = ['firstName', 'surname', 'password', 'confirmpassword', 'age',
        'email', 'sex', 'speciality'];
    for (let field of fields) {
        it(`Has ${field}`, () => {
            expect(wrapper.find('#'+field)).not.toBeNull();
        });
    }

    it('In state, formIsNew: true', () => {
        expect(studentData.formIsNew).toEqual(true);
    });
});


describe('Student Registration: Empty form submit', () => {
    const { wrapper } = init();

    const fields = ['firstName', 'surname', 'password', 'confirmpassword', 'email'];
    for (let field of fields) {
        it(`Has class=error for ${field}`, () => {
            wrapper.find('#submit').simulate('click');
            expect(wrapper.find('input#'+field).hasClass('error'));
        });
    }

    it(`Has class=error for speciality`, () => {
        wrapper.find('#submit').simulate('click');
        expect(wrapper.find('select#speciality').hasClass('error'));
    });

    it(`Has class=error for sex`, () => {
        wrapper.find('#submit').simulate('click');
        expect(wrapper.find('#sex_div').hasClass('error'));
    });
});


describe('Student Registration: Check age limits', () => {
    const { wrapper } = init();
    const input = wrapper.find('input#age');

    it(`Age should be 6..60, has error if 5`, () => {
        input.simulate('change', {target: {value: 5}});
        wrapper.find('#submit').simulate('click');
        expect(input.hasClass('error'));
    });

    it(`Age should be 6..60, has error if 61`, () => {
        input.simulate('change', { target: {value: 61 } });
        wrapper.find('#submit').simulate('click');
        expect(input.hasClass('error'));
    });

});

describe('Student Registration: Fill form without errors', () => {
    const { wrapper } = init();

    const fillValues = {
        firstName: 'asd',
        surname: 'asd',
        password: 'asdasdasd123',
        confirmpassword: 'asdasdasd123',
        age: 22,
        email: 'asd@asd.net',
    };

    it('No errors when fields are filled', () => {
        for (let fkey of Object.keys(fillValues)) {
            let input = wrapper.find('input#'+fkey);
            input.simulate('change', { target: {name: fkey, value: fillValues[fkey] } });
        }
        wrapper.find('input#sex_male').simulate('click');
        wrapper.find('#speciality_developer').simulate('click');
        wrapper.find('#submit').simulate('click');
        expect(wrapper.find('.error').length).toBe(0);
    });

});