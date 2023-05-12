import styled from "styled-components";
import PostModal from "./PostModal"; 
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
    const [showModal, setShowModal] = useState("close");

    useEffect(() => {
        props.getArticles();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch (showModal) {
            case "open":
                setShowModal("close");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
        }
    };

    const users = [
        { name: 'User 1', dist: "2.5" },
        { name: 'User 2', dist: 32 },
        { name: 'User 3', dist: 19 },
        { name: 'User 4', dist: 40 },
        { name: 'User 5', dist: 28 },
        { name: 'User 6', dist: 22 },
      ];
      
     
  return (
    <>
    { 
        props.articles.length === 0 ?
        (<p> There are no articles </p>
        ):(
        <Container>
            <Layout>
                <BlockContainer>
                    {users.map(user => (
                        <Block key={user}>
                            <Photo user={user} />
                            <Dot />
                            <Name>{user.name}</Name>
                            <Distance>{user.dist}</Distance>
                        </Block>
                    ))}
                </BlockContainer>
            </Layout>
            <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
        )}
    </>
    );
};

const Container = styled.div`
  grid-area: main;
`;

const Layout = styled.div`
    text-align: center;

    display: flex;
    flex-direction: column;
    // background-color: #6c757d;
    position: relative;
    padding: 10px;
`;

const BlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;

  & > * {
    border: 1px solid black;
  }
`;

const Block = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  background-color: #495057;
`;

const Photo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
//   background-image: ${props => props.user && props.user.photoURL ? `url(${props.user.photoURL})` : `url("/images/photo-icon.svg")`};
  background-clip: content-box;
//   background-color: white;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Dot = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 16px;
  height: 16px;
  background-color: rgba(0, 128, 0, 0.7);;
  border-radius: 50%;
`;

const Name = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px;
//   background-color: rgba(0, 128, 0, 0.7);
  color: white;
  margin: 0;
  width: 100%;
`;

const Distance = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 8px;
//   background-color: rgba(0, 128, 0, 0.7);
  color: white;
  margin: 0;
`;

const mapStateToProps = (state) => {    
    return { 
      loading: state.articleState.loading,
      user: state.userState.user,
      articles: state.articleState.articles,
    };
};


const mapDispatchToProps = (dispatch) => ({    
    getArticles: () => dispatch(getArticleAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);