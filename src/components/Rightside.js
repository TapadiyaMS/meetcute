import styled from "styled-components";
import { useState } from "react";

const MessageRow = ({ user }) => {
  return (
    <MessageContainer>
      <Photo user={user} />
      <div>
        <Name>{user.name}</Name>
        <LastMessage>{user.lastMessage}</LastMessage>
      </div>
    </MessageContainer>
  );
};

const users = [  {    name: 'User 1',    photoURL: '/images/user1.jpg',    lastMessage: 'Hey, what\'s up?'  },  {    name: 'User 2',    photoURL: '/images/user2.jpg',    lastMessage: 'Can you send me that file?'  },  {    name: 'User 3',    photoURL: '/images/user3.jpg',    lastMessage: 'See you tomorrow!'  },  {    name: 'User 4',    photoURL: '/images/user4.jpg',    lastMessage: 'Did you finish the project?'  },  {    name: 'User 5',    photoURL: '/images/user5.jpg',    lastMessage: 'Happy birthday!'  },  {    name: 'User 6',    photoURL: '/images/user6.jpg',    lastMessage: 'What time is the meeting?'  },  {    name: 'User 7',    photoURL: '/images/user7.jpg',    lastMessage: 'Thanks for your help!'  },  {    name: 'User 8',    photoURL: '/images/user8.jpg',    lastMessage: 'Let\'s catch up soon.'  },  {    name: 'User 9',    photoURL: '/images/user9.jpg',    lastMessage: 'Good morning!'  },  {    name: 'User 10',    photoURL: '/images/user10.jpg',    lastMessage: 'See you later!'  },];

const Rightside = (props) => {
  // add search functionality to filter users based on the search query
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <Container>
      <Layout>
        <Search>
          <div>
            <input
              type="text"
              placeholder="Search User"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Message>
          {filteredUsers.map((user) => (
            <MessageRow key={user.name} user={user} />
          ))}
        </Message>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #495057;
  position: relative;
  padding: 10px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  align-items: center;
  padding: 16px;
  // border-bottom: 1px solid #ccc;
`;

const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: ${props => props.user && props.user.photoURL ? `url(${props.user.photoURL})` : `url("/images/photo-icon.svg")`};
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const LastMessage = styled.div`
  color: #9CA3AF;
  font-size: 14px;
`;



export default Rightside;