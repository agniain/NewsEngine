import React, { Component } from 'react';
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            articles: [],
        };
    }
   
    componentDidMount() {
        this.setState({ articles: [] });
    }

    componentWillUnmount() { 
        this.setState({ articles: [] })
    }

    searchNews = () => {
        const { searchTerm } = this.state;
        const apiKey = '5e5a98f1c4984dce9f63550b60e13a15';
        const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;

        // request ke NewsAPI.org
        axios.get(url)
        .then(response => {
            const data = response.data.articles;

            if (data.length === 0) {
            // No results found
            this.setState({ articles: [{title: 'Sorry, no result found.' }] });
            } else {
            this.setState({ articles: data});
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchTerm !== prevState.searchTerm && this.state.searchTerm !== '') {
            this.searchNews();
        }
    }
   
    render() {
        return (
            <Container>
                <Form className="d-flex ms-auto" onSubmit={(e) => { e.preventDefault(); this.searchNews(); }}>
                    <FormControl
                    type="text"
                    placeholder="Search here..."
                    className="mr-2"
                    value={this.state.searchTerm}
                    onChange={(e) => this.setState({ searchTerm: e.target.value })}
                    />
                    <Button variant="dark" type="submit">Search</Button>
                </Form>
            
            <Row className="mt-4">
                {this.state.articles.map((article, index) => (
                <Col key={index} md={3} mb={4}>
                    <img
                    src={article.urlToImage || 'placeholder-image-url'}
                    alt={article.title}
                    className="img-fluid mb-2"
                    />
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read more
                    </a>
                </Col>
                ))}
            </Row>
            </Container>
        );
    }
}

export default Content;
