import React from "react";
import { shallow } from 'enzyme'

import GifGridItem from "../../components/GifGridItem";

describe('prubas en <GifGridItem', () => {

  const title = 'Dragon Ball'
  const url = 'http://localhost/algo.jpg'

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('deve de mostrar <GifGridItem /> correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  })

  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);

  })

  test('debe tener la imagen con url y alt', () => {

    const img = wrapper.find('img');

    console.log(img.html());

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);


  })

  test('div debe de tener la clase animate__fadeInRight', () => {

    const div = wrapper.find('div');

    expect(div.hasClass('animate__fadeInRight')).toBe(true);

  })

})
