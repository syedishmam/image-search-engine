import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    'Access-Control-Allow-Credentials':true,
                    Authorization: 'Client-ID 8fe60030b2a01ad2cfe8ea65b2956c1b9d41f24182e5e19af278ac6004f75b64'
                }
            });

            console.log(response.data.results);
        }

    render() {
        return (
            <div className ="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;