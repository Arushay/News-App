import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: "nl",
        pageSize: 8
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cf7fac35024a73a9088284cdcfa55e&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
    }

    handlePrevClick = async () => {
        console.log(`prev clicked`,)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cf7fac35024a73a9088284cdcfa55e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles })
        this.setState({
            page: this.state.page - 1,
        })
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07cf7fac35024a73a9088284cdcfa55e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({ articles: parseData.articles })
            this.setState({
                page: this.state.page + 1,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h3 className="mb-3 text-center">Varila News - Top Headlines</h3>
                {this.state.loading && <Spiner />}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn  btn-primary"> &larr; Previous</button>
                    <button type="button" onClick={this.handleNextClick} className="btn  btn-primary">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
