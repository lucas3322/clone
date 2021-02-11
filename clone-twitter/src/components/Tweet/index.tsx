import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon } from './styles';

const Tweet: React.FC = () => {

    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>
            <Body>
            <Avatar />
            
            <Content>
                <Header>
                    <strong>Lucas</strong>
                    <span>@lukaslindo07</span>
                    <Dot />
                    <time>28 de ago</time>
                </Header>

                <Description>Foguete não tem ré ^^</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        22
                    </Status>
                    <Status>
                        <RetweetIcon />
                        95
                    </Status>
                    <Status>
                        <LikeIcon />
                        1.421
                    </Status>
                </Icons>
            </Content>
            </Body>

        </Container>
    );
}

export default Tweet;