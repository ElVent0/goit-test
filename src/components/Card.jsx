import {
  CardStyled,
  MediaContent,
  CardImage,
  CardLogo,
  AvatarContent,
  AvatarContainer,
  AvatarImage,
  StatisticsContent,
  StatisticsParagraph,
  FollowButton,
} from "./Card.styled.jsx";
import { useState, useEffect } from "react";
import Background from "../images/Background.png";
import Hansel from "../images/Hansel.png";
import Logo from "../images/Logo.svg";

const Card = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [numberOfFollowers, setNumberOfFollowers] = useState(100500);

  const onFollow = () => {
    setIsFollowing(!isFollowing);
    localStorage.setItem("isFollowing", !isFollowing);

    if (isFollowing) {
      setNumberOfFollowers(numberOfFollowers - 1);
      localStorage.setItem(
        "numberOfFollowers",
        JSON.stringify(numberOfFollowers - 1)
      );
    } else {
      setNumberOfFollowers(numberOfFollowers + 1);
      localStorage.setItem(
        "numberOfFollowers",
        JSON.stringify(numberOfFollowers + 1)
      );
    }
  };

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("isFollowing")) !== null &&
      JSON.parse(localStorage.getItem("numberOfFollowers")) !== null
    ) {
      setIsFollowing(JSON.parse(localStorage.getItem("isFollowing")));
      setNumberOfFollowers(
        JSON.parse(localStorage.getItem("numberOfFollowers"))
      );
    }
  }, []);

  return (
    <CardStyled>
      <MediaContent>
        <CardImage
          src={Background}
          style={{ width: "308px", height: "168px" }}
          alt="Decorative image of a question mark"
        />
        <CardLogo
          src={Logo}
          style={{ width: "76px", height: "22px" }}
          alt="GOIT logo"
        />
      </MediaContent>
      <AvatarContent>
        <AvatarContainer>
          <AvatarImage
            src={Hansel}
            style={{ width: "62px", height: "62px" }}
            alt="User avatar"
          />
        </AvatarContainer>
      </AvatarContent>
      <StatisticsContent>
        <StatisticsParagraph>777 tweets</StatisticsParagraph>
        <StatisticsParagraph>
          {numberOfFollowers && numberOfFollowers.toLocaleString("en-US")}{" "}
          Followers
        </StatisticsParagraph>
        <FollowButton isFollowing={isFollowing} onClick={onFollow}>
          {!isFollowing ? "Follow" : "Following"}
        </FollowButton>
      </StatisticsContent>
    </CardStyled>
  );
};

export default Card;
