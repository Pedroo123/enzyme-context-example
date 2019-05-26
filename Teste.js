import React { PropTypes } from 'React';

const PropTypes = {};

const defaultProps = {};

class Teste extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="teste">
                Testeeeeeee
            </div>
        )
    }
}

Teste.PropTypes = PropTypes;
Teste.defaultProps = defaultProps;


export default Teste;
