import { render } from '@testing-library/react';
import React from 'react';
//import * as ReactDOM from 'react-dom';
import TestRenderer, { create,act } from 'react-test-renderer';


import FormikPage from '../03-forms/pages/FormikPage';




console.log(create);

describe('Pruebas al componente Raiz', () => {
    
    test('Deebe mostrar algo', () => { 
        const wrapper = create(<FormikPage/>);
        console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot()
     });


     test('Deebe mostrar algo', () => { 
        const {container} = render(<FormikPage/>);

        console.log(container);
     });



})