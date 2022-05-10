import React from "react";
import {shallow} from 'enzyme'

import GifExpertApp from'../GifExpertApp'

describe('prubas en <GifExpertApp' , ()=>{
  test('deve de mostrar <GifExpertApp /> correctamente', ()=>{
    const saludo = 'hola Soy Goku'
    const wrapper = shallow( <GifExpertApp/> );
    expect(wrapper).toMatchSnapshot();
  })
})