import styled, { css } from "styled-components";
import GithubIcon from "./../../assets/githubicon.svg?react";
import EmailIcon from "./../../assets/emailicon.svg?react";
import { useState } from "react";
import SearchIcon from "./../../assets/search.svg?react";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  max-width: 768px;
`;

const Header = styled.div`
  margin-top: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 60px;
  border-bottom: 1px solid #6c757d;
`;

const UserProfileImage = styled.img`
  border-radius: 50%;
  border: none;
  width: 128px;
  height: 128px;
  margin-right: 30px;
`;

const UserAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;

const UserNickname = styled.div`
  font-size: 1.5rem;
  color: #343a40;
  font-weight: bold;
`;

const UserIntro = styled.div`
  font-size: 1rem;
  color: #6c757d;
`;

const UserSocialInfo = styled.div`
  display: flex;
  font-size: 1.1rem;
  justify-content: end;
  align-items: end;
  margin: 16px 0;
  color: #343a40;
  gap: 16px;
  width: 100%;
`;

const StrongNumber = styled.span`
  font-weight: bold;
`;

const UserContactInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserContactIconBox = styled.div`
  display: flex;
`;

const UserContactIconButton = styled.button`
  border: none;
  outline: none;
  background: none;
`;

const contactIconStyle = css`
  width: 48px;
  height: 48px;
  color: #6c757d;
  cursor: pointer;
  margin-right: 16px;

  &:hover {
    color: #343a40;
  }
`;

const UserGithubContactIcon = styled(GithubIcon)`
  ${contactIconStyle}
`;

const UserEmailContactIcon = styled(EmailIcon)`
  ${contactIconStyle}
`;

const FollowButton = styled.button`
  border-radius: 24px;
  font-size: 1.2rem;
  padding: 0.5rem 1.8rem;
  background: none;
  color: #12b886;
  outline: none;
  border: 1px solid #12b886;
  cursor: pointer;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 40px 0;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 128px;
  cursor: pointer;
`;

const MenuUnderLine = styled.div`
  position: absolute;
  width: 128px;
  top: calc(100% + 12px);
  height: 1px;
  border-bottom: 3px solid #12b886;
  transform: ${({ $val }) => `translateX(${($val - 2) * 128}px)`};
  transition: transform 0.3s ease;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  color: #6c757d;

`;

const SearchInputBox = styled.div`
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #6c757d;;
  display: flex;
  align-items: center;

`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: black;
`;

const UserPostsPage = () => {
  const [val, setVal] = useState(1);

  return (
    <Layout>
      <Body>
        <Header>
          <UserInfo>
            <UserProfileImage src="https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=1024x1024&w=is&k=20&c=Ci4unh6xc-hSxWAdqbY2CDGG4_8j8HnG1mPh4gbWYHs=" />
            <UserAbout>
              <UserNickname>유저 닉네임</UserNickname>
              <UserIntro>
                소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문소개문
              </UserIntro>
            </UserAbout>
          </UserInfo>
          <UserSocialInfo>
            <div>
              <StrongNumber>{" 0 "}</StrongNumber>팔로워
            </div>
            <div>
              <StrongNumber>{" 0 "}</StrongNumber>팔로잉
            </div>
          </UserSocialInfo>
        </Header>
        {/*추후에 다른 아이콘들 필요하면 추가할 것 */}
        <UserContactInformation>
          <UserContactIconBox>
            <UserContactIconButton>
              <UserGithubContactIcon />
            </UserContactIconButton>
            <UserContactIconButton>
              <UserEmailContactIcon />
            </UserContactIconButton>
          </UserContactIconBox>
          <FollowButton>팔로우</FollowButton>
        </UserContactInformation>
        <MenuBox>
          <MenuUnderLine $val={val} />
          <Menu onClick={() => setVal(1)}>메뉴 1</Menu>
          <Menu onClick={() => setVal(2)}>메뉴 2</Menu>
          <Menu onClick={() => setVal(3)}>메뉴 3</Menu>
        </MenuBox>
        <SearchBox>
          <SearchInputBox>
            <SearchIcon />
            <SearchInput placeholder="검색어를 입력하세요." />
          </SearchInputBox>
        </SearchBox>
      </Body>
    </Layout>
  );
};

export default UserPostsPage;
