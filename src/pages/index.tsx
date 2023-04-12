import { type NextPage } from "next";
import { Container, Group } from "@mantine/core";
import { CardWrapper } from "~/components/Card/CardWrapper";

const Home: NextPage = () => {
  return (
    <Container className={"p-8"}>
      <Group className={"gap-10 items-stretch"}>
        <CardWrapper
          image={"portfolio.png"}
          description={`This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a
        powerful addition to CSS, so it&apos;s worth getting to grips with it!`}
          title={"Testiomonial grid section"}
        />

        <CardWrapper
          image={"portfolio_2.png"}
          description={`In this challenge, you'll be building out an early access landing page that includes custom form validation.`}
          title={"Pod request access landing page"}
        />

        <CardWrapper
          image={"portfolio_3.png"}
          description={`This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.`}
          title={"Results summary component"}
        />

        <CardWrapper
          image={"portfolio_4.png"}
          description={`This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.`}
          title={"NFT preview card component"}
        />
      </Group>
    </Container>
  );
};

export default Home;
