/*
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Enzyme, { mount, shallow } from 'enzyme';
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
    const wrapper = shallow(<Provider store={store}><StudentRegistration/></Provider>);
    return {
        store,
        wrapper
    }
};

// XXX snapshot test

test('Initial value should be received from property source', () => {
    const { store, wrapper } = init();
    const container = wrapper.container;
    let firstName = wrapper.find('input');
    console.log('firstName', firstName);
    //expect(value).toBe(source);
});




describe('Student Registration: Form has all fields', () => {
    const { store, wrapper } = init();
    const state = renderHook(() => store.getState(store));
    const studentData = state.result.current.student;

    const fields = ['fizrstName', 'surname', 'password', 'confirmpassword', 'age',
        'email', 'sex', 'speciality'];
    for (let field of fields) {
        it(`Has ${field}`, () => {
            console.log(field, wrapper.find('#' + field));
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
        input.instance().value = '5';
        input.simulate('change');
        wrapper.find('#submit').simulate('click');
        expect(input.hasClass('error'));
    });

    it(`Age should be 6..60, has error if 61`, () => {
        input.instance().value = '60';
        input.simulate('change');
        wrapper.find('#submit').simulate('click');
        expect(input.hasClass('error'));
    });

});

describe('Student Registration: Fill form without errors', () => {
    const { wrapper } = init();

    const fillValues = {
        firstName: 'a',
        surname: 'asd',
        password: 'asdasdasd123',
        confirmpassword: 'asasd123',
        age: 22,
        email: 'asd@asd.net',
    };

    it('No errors when fields are filled', () => {
        for (let fkey of Object.keys(fillValues)) {
            let input = wrapper.find('input#'+fkey);
            input.instance().value = fillValues[fkey];
            input.simulate('change');
        }
        wrapper.find('input#sex_male').simulate('click');
        wrapper.find('#speciality_developer').simulate('click');
        wrapper.find('#submit').simulate('click');
        console.log('wrapper.find(\'.error\')', wrapper.find('.error'));
        console.log('wrapper', wrapper);
        expect(wrapper.find('.error').length).toBe(0);
    });

});
*/
