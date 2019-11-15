import React from 'react';
import { withRouter } from 'react-router-dom';
import FetchResults from '../../../../Foundation/Search/Actions';
import * as constants from '../../../../Foundation/Search/Constants';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        const source = constants.SEARCH_SOURCE;
        const search = props.history.location.search;
        const params = new URLSearchParams(search);

        this.state = {
            query: params.get('q'),
            fieldsEqual: [{ name:"_fullpath", value:source }],
            results: []
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const search = this.props.history.location.search;
        const params = new URLSearchParams(search);
        if (prevState.query !== params.get('q')) {
            this.getResult();
        }
    }
       

    componentDidMount() {
        this.props.history.listen(location => {
            const search = location.search;
            const params = new URLSearchParams(search);
            this.setState({query: params.get('q')}); 
        });
        this.getResult();
    }

    getResult() {
        const isDisconnected = this.props.route.deviceId === 'available-in-connected-mode';
        let resultItems = [];
        
        if(!isDisconnected && this.state.query) {
            FetchResults(this.state).then((value) => {
                if (value && value.results) {
                    resultItems = value.results;
                    this.setState({
                        results: resultItems,
                    });
                }

            },
            (error) => console.log(error));
        }
    }

    render() {
        const { results } = this.state;
        console.log('rrrr', results.length)

        return(
            <div className="container">
                <p>{results.length}</p>
                {   
                    results && 
                    
                    <ul>
                        {
                            results.map((item, index) => 
                                <li key={`item-${index}`}>
                                    <p>
                                        <a href={item.url} title={item.name}>{item.name}</a>
                                    </p>
                                </li>
                            )
                        }
                    </ul>
                    
                    
                }
            </div>
        );
    }
}

export default withRouter(SearchResults)