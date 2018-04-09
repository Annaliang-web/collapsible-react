import React from 'react';
import image from '../images/collapse-window-option.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible in React</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Produce">
                            <p>Produce content</p>
                        </Collapsible>
                        <Collapsible title="Dairy">
                            <p>Dairy</p>
                        </Collapsible>
                        <Collapsible title="Meat">
                            <p>Meat</p>
                        </Collapsible>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
