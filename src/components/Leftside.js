import styled from "styled-components";
import { connect } from "react-redux";
import { useState } from "react";
import { firebase } from 'firebase/compat/app';

const Leftside = (props) => {
  // 
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const changeName = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <Layout>
        <HeaderWrapper>
            <Photo />
        </ HeaderWrapper>
        
        <Details>
          <FieldWrapper>
            <Field>
              <h1> Name </h1>
            </Field>
            <Name
              type="text"
              defaultValue="user"
              onChange={changeName}
            />
          </FieldWrapper>

          
          <Field>
            <h1> About Me </h1>
          </Field>
          <AboutMe
            type="text"
            onChange={handleSearch}
          />
          
          
          <FieldWrapper>
            <Field>
              <h1> Position </h1>
            </Field>
            <select onChange={handleSearch}>
              <option value="">Please choose a position</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="versatile">Versatile</option>
              <option value="versatiletop">Versatile Top</option>
              <option value="versatilebot">Versatile Bottom</option>
              <option value="other">Other</option>
            </select>
          </FieldWrapper>

          
          <FieldWrapper>
            <Field>
              <h1> Body Type </h1>
            </Field>
            <select onChange={handleSearch}>
              <option value="">Please choose a body type</option>
              <option value="masc">Mascular</option>
              <option value="athlete">Athlete</option>
              <option value="bear">Bear</option>
              <option value="fat">Fat</option>
              <option value="other">Other</option>
            </select>
          </FieldWrapper>
          
          
          <Field>
            <h1> Looking for </h1>
          </Field>
          
          
          <Field>
            <h1> Status </h1>
          </Field>
          
        </Details>
        
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #495057;
`;

const HeaderWrapper = styled.div`
  display:flex;
  flex-flow:column wrap;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
  padding-bottom: 10px;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: ${props => props.user && props.user.photoURL ? `url(${props.user.photoURL})` : `url("/images/photo-icon.svg")`};
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-radius: 50%;
`;

const FieldWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex; 
  flex-direction: column;
`;

const Field = styled.div`
display: flex;
flex-direction: row;
padding: 20px;
`;

const Name = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: inherit;
  font-size: inherit;
`;

const AboutMe = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: inherit;
  font-size: inherit;
`;

const mapStateToProps = (state) => {    
  return { 
    user: state.userState.user,
  };
};


export default connect(mapStateToProps)(Leftside);