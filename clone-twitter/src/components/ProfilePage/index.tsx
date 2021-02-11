import React from 'react';

import Feed from '../Feed';

import { Container, 
         Banner, 
         Avatar, 
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return(
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Lucas Pardinho</h1>
              <h2>@lukaslindo07</h2>

              <p>
                  Developer at <a href="https://www.facebook.com/lucas_Winchester">Lucas Winchester</a>
              </p>


              <ul>
                  <li>
                      <LocationIcon />
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 20 de junho de 1997
                  </li>
              </ul>

              <Followage>
                  <span>
                      Seguindo <strong>235</strong>
                  </span>
                  <span>
                      <strong>174 </strong> Seguidores
                  </span>
              </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;