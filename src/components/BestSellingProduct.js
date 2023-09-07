import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AuthRoutes } from "../url";

function BestSellingProduct({ product }) {
  const [textTooLong, setTextTooLong] = useState(true);
  const navigate = useNavigate();
  return (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Card className="relative">
        <CardMedia
          component="img"
          onClick={() => navigate(AuthRoutes.ViewAllItems)}
          image={product.imageSrc}
          title={product.name}
          sx={{
            position: "relative",
            cursor: "pointer",
          }}
        />
        <p className="rounded-[12px] bg-[#F1F7F7] absolute top-[12px] left-[12px] font-[500] font-Raleway text-[10px] text-[#141414] py-[6px] px-[12px] ">
          Today
        </p>
        <CardContent className="bg-[#F1F7F7] ">
          <div className="flex justify-between">
            <Typography
              variant="body2"
              fontStyle="Raleway"
              sx={{
                fontSize: "12px",
                fontFamily: "Raleway",
                fontWeight: "500",
              }}
            >
              {product.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Raleway",
                fontWeight: "700",
              }}
            >
              {product.price}
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: "10px",
              fontFamily: "Raleway",
              fontColor: "#141414",
              marginTop: "10px",
            }}
          >
            <div>
              {textTooLong ? `${product.text.substr(0, 70)} ...` : product.text}
              {textTooLong ? (
                <button
                  type="button"
                  key={product.id}
                  className="text-[10px] font-[600] font-Raleway text-[#077369] ml-1"
                  onClick={() => setTextTooLong(!textTooLong)}
                >
                  View More
                </button>
              ) : (
                <button
                  type="button"
                  key={product.id}
                  className="text-[10px] font-[600] font-Raleway text-[#077369] ml-1"
                  onClick={() => setTextTooLong(!textTooLong)}
                >
                  View less
                </button>
              )}
            </div>
          </Typography>
          <div className="mt-[10px] flex justify-between ">
            <div>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontFamily: "Raleway",
                  fontColor: "#141414",
                }}
              >
                Color
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Raleway",
                  fontWeight: "700",
                }}
              >
                Orange
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontFamily: "Raleway",
                  fontColor: "#141414",
                }}
              >
                Condtion
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Raleway",
                  fontWeight: "700",
                }}
              >
                Damaged
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontFamily: "Raleway",
                  fontColor: "#141414",
                }}
              >
                Shipping Option
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Raleway",
                  fontWeight: "700",
                }}
              >
                Pick-up
              </Typography>
            </div>
          </div>
          <div className="mt-[10px] flex justify-between ">
            <div>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontFamily: "Raleway",
                  fontColor: "#141414",
                }}
              >
                Items Category
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Raleway",
                  fontWeight: "700",
                }}
              >
                Phones and gadgets
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontFamily: "Raleway",
                  fontColor: "#141414",
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Raleway",
                  fontWeight: "700",
                }}
              >
                Lagos/Ogudu
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BestSellingProduct;
