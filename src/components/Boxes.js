import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import MySearch from "./MySearch";

const CardComponent = ({
  id,
  size,
  sx = {},
  avatar = null,
  title = "",
  action = null,
  loading = false,
  children = null,
}) => {
  return (
    <Grid item id={id} {...size}>
      <Card elevation={2}>
        <CardHeader avatar={avatar} title={title} action={action} />
        <Divider sx={{ mt: 0, mb: 2 }} />
        <CardContent sx={{ maxHeight: "350px", ...sx }}>{children}</CardContent>
      </Card>
    </Grid>
  );
};

const Boxes = () => {
  const datas = [
    {
      id: 1,
      size: { xs: 6, sm: 3, md: 2 },
      sx: {
        overflowY: "scroll",
      },
      avatar: null,
      title: "Don't Touch",
      action: null,
      content: null,
    },
    {
      id: 2,
      size: { xs: 6, sm: 3, md: 2 },
      sx: {
        height: "100%",
      },
      avatar: null,
      title: "Don't Touch",
      action: null,
      content: null,
    },
    {
      id: 3,
      size: { xs: 6, sm: 3, md: 2 },
      sx: {},
      avatar: null,
      title: "Don't Touch",
      action: null,
      content: null,
    },
    {
      id: 4,
      size: { xs: 6, sm: 3, md: 4 },
      sx: {
        minHeight: { xs: 420, md: 350 },
        p: 0,
      },
      avatar: null,
      title: "Search",
      action: null,
      content: <MySearch />,
    },
    {
      id: 5,
      size: { xs: 6, sm: 3, md: 2 },
      sx: {
        height: "100%",
      },
      avatar: null,
      title: "Don't Touch",
      action: null,
      content: null,
    },
    {
      id: 6,
      size: { xs: 6, sm: 3, md: 2 },
      sx: {},
      avatar: null,
      title: "Don't Touch",
      action: null,
      content: null,
    },
    {
      id: 7,
      size: { xs: 6, sm: 3, md: 2 },
      sx: {
        minHeight: 150,
      },
      avatar: null,
      title: "Don't Touch",
      action: null,
      content: null,
    },
    {
      id: 8,
      size: { xs: 6, sm: 3, md: 2 },
      sx: {
        minHeight: 150,
      },
      avatar: null,
      title: "Don't Touch",
      action: null,
      content: null,
    },
  ];
  return (
    <Grid container spacing={2} columns={6}>
      {datas.map(
        ({ id, size, sx, avatar, title, action, content, loading }) => (
          <CardComponent
            key={id}
            size={size}
            sx={sx}
            avatar={avatar}
            title={title}
            action={action}
            loading={loading}
          >
            {content}
          </CardComponent>
        )
      )}
    </Grid>
  );
};

export default Boxes;
