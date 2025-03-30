import styled from "styled-components"

const Wrapper = styled.div`
    width:80%;
    height:40%;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: ${({theme}) => theme.colors.white};
    padding: 10px 30px 10px 30px;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
`

export const Title = styled.h2`
    font-size: ${({theme}) => theme.colors.error };
    color: ${({theme}) => theme.colors.darkGrey};
`

export const Content = styled.p`
    font-size: ${({theme}) => theme.fontSize.l};
    color: ${({theme}) => theme.colors.darkGrey};
`
export const Image = styled.img`
    width: 40%;
    height: 70%;
    border-radius: 20px;
`



interface ArticleItemProps {
    data:any
}

const ArticleItem : React.FC<ArticleItemProps> = ({data}) => {
    console.log(data)
    return(
        <Wrapper>
            <Title>{data.title}</Title>
            <ContentWrapper>
                <Content>{data.content.split(" ").slice(0,10).join(" ")}...</Content>
                {data.image && <Image src={data.image.url} />}
            </ContentWrapper>
           
        </Wrapper>
    )
}

export default ArticleItem