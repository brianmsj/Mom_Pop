import React from 'react';
import * as Cookies from 'js-cookie';
import Home from './home'
import LoginPage from './login-page';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        // Job 4: Redux-ify all of the state and fetch calls to async actions.
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            fetch('/api/auth/me', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
                if (!res.ok) {
                    if (res.status !== 401) {
                        // Unauthorized, clear the cookie and go to
                        // the login page
                        Cookies.remove('accessToken');
                        return;
                    }
                    throw new Error(res.statusText);
                }
                return res.json();
            }).then(currentUser =>
                this.setState({
                    currentUser
                })
            );
        }
    }

    // Adam Lazco - Managing Director. For HighMetric.
    // 5 - 7 people
    // Personality. Know what the job entails. Technical process. Pre-Sales.
    // Basic.
    // 2 offices in Chicago. San Francisco, Houston, Dallas. Office. Remote.
    // Stay at home and go to see the client site. Remotely.
    // 20% Development, tweaking things on the platform.
    // Solution that comes out of the box. Javascript
    // Which modules are actually necessary for the client to use. Which modules do the client
    // need to use? Integrate with current system.
    // What is your knowledge of databases??? Microsoft MS SQL.
    // How would you solve this issue? Looking for if you know how to find the answer.
    // After we do the demo. Coached on the all the modules
    // Work as a business analyst. help the BA's ask questions? what do you actually need?
    // explain how the HR module works. Why is it there?
    // Team builds out solution.
    // Go and hang out with the clients and make sure the integration.
    // Talk to client sys admins and network engineers. Needs to work with e-mail.
    //

    render() {
        if (!this.state.currentUser) {
            return <LoginPage />;
        }

        return <Home />;
    }
}

export default App;
