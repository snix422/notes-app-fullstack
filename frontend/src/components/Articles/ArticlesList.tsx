import styled from "styled-components"
import ArticleItem from "./ArticleItem"

interface ArticlesListProps {
    articles:any[]
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
`

const ArticlesList : React.FC<ArticlesListProps> = ({articles}) => {
    return(
        <Wrapper>
            {articles.map((a:any) => <ArticleItem data={a} /> )}
        </Wrapper>
    )
}

export default ArticlesList