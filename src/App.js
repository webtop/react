import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

const apiEndpoint = 'https://8x5rz53wlf.execute-api.us-west-2.amazonaws.com/Production';
const mediaPath = 'https://landonhotel.com/images';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Main />

                <Footer />
            </div>
        );
    }
}

export {
    App as default,
    apiEndpoint,
    mediaPath
}
