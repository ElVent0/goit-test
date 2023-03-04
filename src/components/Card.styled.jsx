import styled from "styled-components";

export const CardStyled = styled.div`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const MediaContent = styled.div`
  width: 100%;
  max-height: 214px;
  display: flex;
  justify-content: center;
  padding: 28px 0 18px 0;
  position: relative;
`;

export const CardImage = styled.img``;

export const CardLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const AvatarContent = styled.div`
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  display: flex;
  justify-content: center;
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  position: relative;
  top: -36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const StatisticsContent = styled.div`
  padding: 62px 0 36px 0;
`;

export const StatisticsParagraph = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  &:first-of-type {
    margin-bottom: 16px;
  }
  &:last-of-type {
    margin-bottom: 26px;
  }
`;

export const FollowButton = styled.button`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  height: 50px;
  cursor: pointer;
  background: ${(props) => (!props.isFollowing ? `#ebd8ff` : "#5cd3a8")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
