import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import * as constants from '../../../../Foundation/Search/Constants';
import FetchResults from '../../../../Foundation/Search/Actions';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);

        const source = constants.ARTICLES_SOURCE;

        this.state = {
            querey: '*',
            fieldsEqual: [{ name:"_fullpath", value:source }],
            results: []
        };
    }

    componentDidMount() {
        this.getResult();
    }

    getResult() {
        const isDisconnected = this.props.route.deviceId === 'available-in-connected-mode';
        let resultItems = [];
        
        if(!isDisconnected) {
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

        return(
            <div className="row">
                <p>ArticleList Component</p>
                <Text field={this.props.fields.heading} />
    
                <div>
                    {
                        results &&
                        <ul>
                            {
                                results.map((item, index) =>
                                    <li key={`item-${index}`}>
                                        <h2>{item.name}</h2>
                                        <a href={item.name} title={item.name}>{item.name}</a>
                                    </li>
                                )
                            }
                        </ul>
                    }
                </div>
            </div>
        );
    }
}


export default ArticleList;
    