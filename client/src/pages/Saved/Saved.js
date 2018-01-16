import React, { Component } from 'react';
import axios from "axios";
import ResultCard from "./../../components/ResultCard";
import Delete from "./../../components/Delete";

class Saved extends Component {

	state = {
		articles: []
	}

	componentDidMount() {
    axios.get("/api/articles")
      .then(res => {
      	console.log(res.data)
      	const box = res.data
      	this.setState({ articles: box })
      })
      .catch(err => console.log(err));
  }

	deleteArticle = id => {
		console.log(id);
    axios.delete("/api/articles/" + id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

	render() {
		return (
			<div className="card">
        <h5 className="card-header">Saved Articles</h5>
        <div className="card-body">
				  {this.state.articles.map(article => {
            return (
              <ResultCard 
                key={article.title}
                id={article._id}
                headline={article.title}
                link={article.url}
                date={article.date}
              >
                <Delete onClick={() => this.deleteArticle(article._id)} />
              </ResultCard>
            );
          })}
        </div>
      </div>
		)
	}
} 

export default Saved;