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

function PostSubmitButton({ disabled }) {
  return React.createElement(
    Button,
    {
      type: "submit",
      floated: "right",
      disabled,
      [!disabled && "color"]: "green"
    },
    "Post"
  );
}

function PostActionIcon({ name }) {
  return <Button basic circular icon={name} />;
}

function PostInput({ handleChange }) {
  return <Form.TextArea placeholder="Type your post" onChange={handleChange} />;
}

function PostForm() {
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
    <Form>
      <PostInput handleChange={handleChange} />
      <PostActionIcon name="image outline" />
      <PostActionIcon name="attach" />
      <PostActionIcon name="smile" />
      <PostSubmitButton disabled={!hasText} />
    </Form>
  );
}

function App() {
  return (
    <Grid stackable>
      <Grid.Row centered>
        <Grid.Column width={8}>
          <Segment>
            <Header content="New Post" />
            <Divider />
            <PostForm />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
