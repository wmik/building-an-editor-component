import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [hasText, setHasText] = React.useState(false);
  const handleChange = React.useCallback(
    e => {
      if (e.currentTarget.textLength > 0 && !hasText) {
        setHasText(true);
      } else if (e.currentTarget.textLength === 0) {
        setHasText(false);
      }
    },
    [hasText, setHasText]
  );
  return (
    <Grid stackable>
      <Grid.Row centered>
        <Grid.Column width={8}>
          <Segment>
            <Header content="New Post" />
            <Divider />
            <Form>
              <Form.TextArea
                placeholder="Type your post"
                onChange={handleChange}
              />
              <Button basic circular icon="image outline" />
              <Button basic circular icon="attach" />
              <Button basic circular icon="smile" />
              <Button
                type="submit"
                floated="right"
                disabled={!hasText}
                color={hasText ? "green" : ""}
              >
                Post
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
