import React from "react";
import { Typography, withWidth } from "@material-ui/core";





function Item(props)
{
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Reviews about me on Upwork
        </Typography>
      </div>
    </div>
  )
}

export default withWidth()(Item);


