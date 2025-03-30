import styled from "styled-components"
import ArticlesList from "./ArticlesList"
import { gql, useQuery } from "@apollo/client"

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    padding:20px;
    background-color: ${({theme}) => theme.colors.darkGrey};
    border:2px solid red;
`

export const LoadingTitle = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xl};
`

export const ErrorMessage = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xl};
    color: ${({theme}) => theme.colors.error};
`

const query = gql`
{
  allArticles{
    id,
    title,
    author,
    content,
    publisheddate,
    image{
      alt
      url
    }
  }
}
`

const ArticlesContainer = () => {

    const {loading,error,data} = useQuery(query);
   console.log(data);
    return(
        <Wrapper>
            {loading && <LoadingTitle>Loading...</LoadingTitle>}
            {(!loading && !error) ? <ArticlesList articles={data.allArticles}/> : null}
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </Wrapper>
    )
}

export default ArticlesContainer