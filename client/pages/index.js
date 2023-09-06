import buildClient from "../api/build-client";

const Index = ({ currentUser }) => {
  return currentUser ? (
    <h1>signed in</h1>
  ) : (
    <h1>signed out</h1>
  );
};

Index.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default Index;
