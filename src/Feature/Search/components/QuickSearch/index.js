import React from 'react';
import AutoComplete from '../../../../Foundation/Search/Autocomplete';
import FetchResults from '../../../../Foundation/Search/Actions';
import packageJson from '../../../../../package.json';
import { withRouter } from 'react-router-dom';

class QuickSearch extends React.Component {
   
    constructor(props) {
        super(props);
        const source = `/sitecore/content/${
                            packageJson.config.appName
                        }/home*`;

        this.state = {
            userInput: '',
            query: '',
            fieldsEqual: [{ name:"_fullpath", value:source }]
        };

        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    onUserInput = (value) => {
        this.setState(
            {
                userInput: value,
                query: value
            }
        );
    }

    handleSearchClick() {
        if(!this.state.query) { return; }

        let queryString = "q=" + this.state.query;

        if(this.props.route.templateName === 'search') {
            this.props.history.push(`?${queryString}`);
        }
        else {
            this.props.history.push(`/search?${queryString}`);
        }
    }

    render() {
        let suggestions = [];
        const isDisconnected = this.props.route.deviceId === 'available-in-connected-mode';

        if(this.state.userInput && this.state.userInput.length >= 3) {

            if(!isDisconnected) {
                FetchResults(this.state).then(function(value) {
                    value && value.results.map((listItem) => {
                        suggestions.push(listItem.name);
                        return suggestions;
                    })
                });
            }
        }

        return (
            <div>
                <AutoComplete suggestions={suggestions} onChange={this.onUserInput} />
                <input type="submit" value="search" onClick={this.handleSearchClick} className="submit-btn" />
            </div>
        );
    }
};

export default withRouter(QuickSearch);
    