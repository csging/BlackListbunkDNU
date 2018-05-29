import React from "react";

export class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://icanhazdadjoke.com/',
            joke: ''
        }
    }

    componentWillMount() {
        const myHeaders = new Headers({
            "Accept": "application/json"
        });

        const myInit = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(this.state.url, myInit).then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message))
            .then(response => {

                this.setState({
                    joke: response.joke
                });
            })
    }

    render() {
        return (
            <div className="dadjoke">
                <p style={{color: 'black'}}>Need some inspiration? Try a dad joke:</p>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}