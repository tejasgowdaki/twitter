import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Input,
  Card,
  Button,
  Image,
  Menu,
  Container,
  Header,
  Segment
} from "semantic-ui-react";
import moment from "moment";

import { fetchTweets } from "./api";

import { paginate } from "./helper";

const style = {
  searchButton: {
    marginLeft: "2em"
  },
  newTweetsButton: {
    marginLeft: "3em"
  },
  loadMoreButton: {
    marginTop: "3em",
    marginBottom: "1em",
  }
};

const Tweet = props => {
  const [searchText, setSearchText] = useState("");

  const onClickSearch = async () => {
    props.setTweets([]);
    const fetchTweetsResponse = await fetchTweets(searchText);
    props.setTweets(fetchTweetsResponse.tweets);
  };

  const onClickLoadMore = async () => props.loadMore();

  const onClickLoadNewTweets = async () => props.loadNewTweets();

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a">
            <Header as="h2" inverted content="Twitter Search & Stream" />
          </Menu.Item>

          <Menu.Item as="a">
            <Input
              placeholder="Search..."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </Menu.Item>

          <Menu.Item as="a">
            <Button
              type="button"
              primary
              style={style.searchButton}
              onClick={onClickSearch}
            >
              Search
            </Button>
          </Menu.Item>

          {props.isNewTweetsPresent && (
            <Menu.Item as="a" position="right" text>
              <Button
                type="button"
                color="red"
                style={style.newTweetsButton}
                onClick={onClickLoadNewTweets}
              >
                Load new tweets
              </Button>
            </Menu.Item>
          )}
        </Container>
      </Menu>

      <Card.Group style={{ marginTop: "7em", marginLeft: "2em" }}>
        {props.tweets.map((tweet, index) => (
          <Card key={index}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={tweet.user.profile_image_url_https}
              />
              <Card.Header>{tweet.user.name}</Card.Header>
              <Card.Meta>
                @{tweet.user.screen_name} . {moment(tweet.created_at).fromNow()}
              </Card.Meta>
              <Card.Description>{tweet.text}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      {props.isShowLoadMore && (
        <Segment
            textAlign='center'
            style={{  padding: '1em 0em' }}
            vertical
          >
          <Button
              type="button"
              color="blue"
              style={style.loadMoreButton}
              onClick={onClickLoadMore}
            >
              Load more
            </Button>
          </Segment>
      )}
    </div>
  );
};

const mapStateToProps = ({ pageSize, tweets, newTweets }) => ({
  isShowLoadMore: !!(tweets.length && tweets.length > pageSize),
  tweets: paginate(tweets, pageSize),
  isNewTweetsPresent: !!newTweets.length
});

const mapDispatchToProps = dispatch => {
  return {
    updateText: text =>
      dispatch({
        type: "TEST_TEXT",
        value: text
      }),
    setTweets: tweets =>
      dispatch({
        type: "SET_TWEETS",
        tweets
      }),
    loadMore: () =>
      dispatch({
        type: "LOAD_MORE"
      }),
    loadNewTweets: () =>
      dispatch({
        type: "LOAD_NEW_TWEETS"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweet);
