import * as React from 'react';
import {
  Container,
  Card,
  CardHeader,
  Display,
  Stack,
  Body,
  Header1,
  Header2,
  RadioGroup,
  Radio,
  LinkedinIcon,
  TwitterIcon,
  ToggleButton,
  Button,
  SubHeadline,
  InstagramIcon,
  LogoIcon,
  Divider,
  tokens,
} from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { ContactForm, LandingToolbar } from '../components';

const useStyles = makeStyles({
  mainSection: {
    backgroundColor: tokens.brand,
    minHeight: '90vh',
  },
  secondaryBackground: {
    backgroundColor: tokens.secondary,
  },
  textMaxWidth: {
    maxWidth: '500px',
  },
  iconStyles: {
    width: 'min(12vw, 128px)',
    height: 'min(12vw, 128px)',
  },
  emojiButtonStyles: {
    fontSize: '30px',
  },
  grow: {
    display: 'flex',
    flexGrow: '1',
  },
});

const Home: NextPage = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const styles = useStyles();

  const onButtonClick = () => window.scrollTo({ top: formRef?.current?.getBoundingClientRect().y });

  return (
    <>
      <LandingToolbar />
      <Container
        className={styles.mainSection}
        appearance="relaxed"
        horizontalAlignment="center"
        verticalAlignment="center"
      >
        <LogoIcon className={styles.iconStyles} color="white" />
        <Display color="white" align="center">
          Turn Follow-Ups Into Sales
        </Display>
        <SubHeadline color="white" align="center">
          Pongo makes it easy to turn post-purchase surveys into a one-click buying experience.
        </SubHeadline>
        <Stack vertical horizontalAlignment="center">
          <Button onClick={onButtonClick} size="large" appearance="primary" color="secondary">
            Join the beta
          </Button>
          <Body color="white" align="center">
            Free, but a limited space.
          </Body>
        </Stack>
      </Container>
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Image width="325" height="585" src="image/feedback-demo.gif" />
          <Stack vertical>
            <Header1>Super-charge your customer return rate ⚡</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Post-purchase feedback requests have the highest open and click rates of any customer interaction, but 75%
              of customers never re-buy.
            </Body>
            <Body className={styles.textMaxWidth} size={500}>
              Pongo fixes this by turning feedback into personalized product recommendations that can be purchased in
              one click.
            </Body>
          </Stack>
        </Stack>
        <Divider />
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Stack vertical>
            <Header1>Intelligent cross-sells 🧠</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Our advanced recommendation system combines the customer's feedback with their purchase history, to serve
              up personalized product recommendations.
            </Body>
          </Stack>
          <Image width="316px" height="300px" src="image/increase-sales.png" />
        </Stack>
        <Divider />
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Card inline>
            <CardHeader header={<Header2>Printed Tote Bag</Header2>} />
            <Stack horizontalAlignment="center">
              <Image src={'image/bag.png'} width="200px" height="200px" />
            </Stack>
            <Body>How happy are you with your purchases?</Body>
            <Stack horizontalAlignment="center">
              <RadioGroup className={styles.emojiButtonStyles} layout="horizontal">
                <Radio label={'👍'} value={'0'} />
                <Radio label={'👎'} value={'2'} />
              </RadioGroup>
            </Stack>
            <Body>What could have gone better?</Body>
            <Stack>
              <ToggleButton shape="circular">Material</ToggleButton>
              <ToggleButton shape="circular">Packaging</ToggleButton>
              <ToggleButton shape="circular">Price</ToggleButton>
            </Stack>
            <Button color="brand" appearance="primary">
              Submit
            </Button>
          </Card>
          <Stack vertical>
            <Header1>An interface built for conversions 📈</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Our feedback interface is built from the ground up to be intuitive for customers to fill out.
            </Body>
            <Body className={styles.textMaxWidth} size={500}>
              We strive to make this workflow as easy as possible.
            </Body>
          </Stack>
        </Stack>
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center" ref={formRef}>
        <Stack vertical horizontalAlignment="center">
          <Header1 align="center">Join the beta</Header1>
          <Body align="center">Free, but a limited space.</Body>
        </Stack>
        <ContactForm />
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack grow>
          <Stack appearance="relaxed" verticalAlignment="center">
            <Body>© 2022 Pongo Technologies, Inc. 🦧</Body>
            <div className={styles.grow} />
            <div>
              <Button href="https://www.linkedin.com/company/pongoai" as="a" appearance="transparent" shape="circle">
                <LinkedinIcon color="inherit" />
              </Button>
              <Button href="https://twitter.com/joinpongo" as="a" appearance="transparent" shape="circle">
                <TwitterIcon color="inherit" />
              </Button>
              <Button href="https://www.instagram.com/joinpongo" as="a" appearance="transparent" shape="circle">
                <InstagramIcon color="inherit" />
              </Button>
            </div>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
