import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FolowSuggestions from '../FolowSuggestions';
import News from '../News';



import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
 } from './styles'

const SideBar: React.FC = () => {
  return(
      <Container>
          <SearchWrapper>
              <SearchInput placeholder = "Buscar no twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickyBox>
              <Body>
                <List 
                  title="Talvez você curta"
                  elements={[
                    <FolowSuggestions name="lucas santos" nickname="@lukaslindo07"/>,
                    <FolowSuggestions name="lucas santos" nickname="@lukaslindo07"/>,
                    <FolowSuggestions name="lucas santos" nickname="@lukaslindo07"/>,
                ]}
                />
                <List 
                  title="Talvez você curta"
                  elements={[<News />, <News />, <News />]}
                />
                <List 
                  title="Talvez você curta"
                  elements={[<News />, <News />, <News />]}
                />
                <List 
                  title="Talvez você curta"
                  elements={[<News />, <News />, <News />]}
                />
              </Body>
          </StickyBox>
          
      </Container>
  );
}

export default SideBar;