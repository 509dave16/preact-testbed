import './style';
import react, {Component} from 'react';
import { render } from 'react-dom';
import Framework7 from 'framework7';
import Framework7React, {App as F7App, View, Page} from 'framework7-react';
Framework7.use(Framework7React);

class TestPage extends Component {
    render() {
        return (
            <Page>
				<h1>Hello World</h1>
            </Page>
        );
    }
}

const routes = [{path: '/',component: TestPage,}];
export default class App extends Component {
    render() {
        return (
            <F7App react={react} params={{theme: 'auto', routes, id: 'io.framework7.testapp'}}>
                <View url="/" main className="ios-edges"/>
            </F7App>
        )
    }

    componentDidMount() {
        this.$f7ready((f7) => {
        })
    }
}