import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { Flex } from '../components/Flex';
import { Spinner } from '../components/Spinner';
import { spriteTypes, UserAvatar } from '../components/UserAvatar';
import { getUser } from '../graphql/queries/getUser';
import { Query } from '../__generated__/graphql-remastered';

export interface StyledSpanProps {
  color?: string;
}
export const SpanStyled = styled.span<StyledSpanProps>`
  ${(props) =>
    props.color
      ? `color: ${props.color}`
      : `color: ${props.theme.primaryClrRed}`}
`;

const ProfilePage: NextPage = () => {
  const { data: userData, loading, error } = useQuery<Query>(getUser);

  return (
    <Flex
      direction="column"
      alignItems="center"
      accentBgColor
      borderRadius={8}
      gap={8}
      padding={24}
    >
      {loading && <Spinner />}
      {error && (
        <strong style={{ color: 'red' }}>Oops there was an error</strong>
      )}
      {userData?.profile && (
        <>
          <small>
            Your ID <SpanStyled>{userData.profile.id}</SpanStyled>
          </small>
          {userData?.profile.avatar ? (
            <Image
              src={userData.profile.avatar}
              width={200}
              height={200}
              alt=""
            />
          ) : (
            <UserAvatar
              userName={userData.profile.fullName}
              width={200}
              height={200}
              spriteType={spriteTypes.BOTTTS}
            />
          )}
          <h2>{userData.profile.fullName}</h2>
          <p>{userData.profile.email}</p>
        </>
      )}
    </Flex>
  );
};

export default ProfilePage;
