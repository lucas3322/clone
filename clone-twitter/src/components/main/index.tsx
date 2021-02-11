import React from 'react';

import ProfilePage from '../ProfilePage';

import { Container, 
        Header, 
        BackIcon, 
        ProfileInfo, 
        BottonMenu, 
        HomeIcon, 
        SearchIcon, 
        BellIcon, 
        EmailIcon, } from './styles';

const main: React.FC = () => {
  return(
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Lucas </strong>
                  <span>295 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottonMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottonMenu>
      </Container>
  );
}

export default main;