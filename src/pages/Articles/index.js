import {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchArticles } from '../../actions';


const Articles = (props) => {
    console.log('ARTICLES', props)

    useEffect(() => {
        props.fetchArticles()
    }, [])
    function renderArticles(articles) {
        return articles.map((item,i) => {
            return(
                <li key={i}>
                    <h4>{item.title}</h4>
                    <img src={item.image.path} />
                    </li>
            )
        })
    }
    return(
        <div>
            <h3>Articles</h3>
            <ul>
            {renderArticles(props.articles)}
            </ul>
        </div>
    )
}

function mapStateToProps({ articles, loading}) {
    return{ articles, loading };
}

export default connect(mapStateToProps, {fetchArticles})(Articles);