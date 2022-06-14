import { Dropdown, Card, Button, Grid } from "../../components";
import React from "react";

const options = [
  { title: "Drop 1", path: "#" },
  { title: "Drop 2", path: "#" },
  { title: "Drop 3", path: "#" },
];

const Dashboard = (props) => {
  return (
    <Grid
      columns={
        12
        //   [
        //   { xxl: 3, xl: 6, lg: 12, md: 9, sm: 3, xs: 12 },
        //   { xxl: 3, xl: 6, lg: 2, md: 5, sm: 3, xs: 12 },
        //   { xxl: 3, xl: 6, lg: 2, md: 5, sm: 3, xs: 12 },
        // ]
      }
    >
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 1
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 2
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 3
      </Card>
      {/* <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 4
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 5
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 6
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 7
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 8
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 9
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 10
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 11
      </Card>
      <Card title="Card Header" actions={<Button>Action</Button>}>
        Card 12
      </Card> */}
    </Grid>
  );
};

export default Dashboard;
