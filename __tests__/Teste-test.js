import React from 'react';
import { shallow, mount} from 'enzyme';

import Teste from '../Teste';

describe('Testes de exemplo', function() {
  it('deve estar renderizando corretamente, function() {
    expect(shallow(<Teste />).contains(<div className="teste">Testeeeeeee</div>)).toBe(true);
  });

  it('Outra forma de testar a renderização utlizando mount', function() {
    expect(mount(<Teste />).find('.teste').length).toBe(1);
  });
  
});

describe('Enzyme', () => {
    const ComponenteParaTeste = () => (
        <Context.provider value = 'Valor do provider que foi devolvido'>
            <MeuComponente />
        </Context.provider>
    );

    const elemento = shallow(<ComponenteParaTeste />)
    expect(elemento.find(MeuComponente).text.toBe('Valor do provider que foi devolvido'));
})