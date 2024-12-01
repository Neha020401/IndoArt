import React from "react";
import "./Home.css";

const Home = () => {

  const artCategories = [
    {
      imgSrc: "https://img.freepik.com/premium-photo/midsection-man-crafting-treditonal-indian-jwellery_1048944-8284042.jpg?w=740",
      altText: "Jewelry & Metal Arts",
      title: "Jewelry & Metal Arts"
    },
    {
      imgSrc: "https://img.freepik.com/free-photo/ukrainian-embroidery-folk-arts-crafts_469670-25.jpg?t=st=1732738887~exp=1732742487~hmac=0956f9bbcbdb12c74dc7d1bc06d1736c79d6469a6a4d7a25aa6451252edaf9d9&w=740",
      altText: "Engraving Arts",
      title: "Engraving Arts"
    },
    {
      imgSrc: "https://img.freepik.com/premium-photo/hindu-god-jagannath-souvenir-worship_792070-1619.jpg?w=740",
      altText: "Handmade Idols",
      title: "Handmade Idols"
    },
    {
      imgSrc: "https://img.freepik.com/premium-photo/dream-catcher-with-brown-threads_105565-745.jpg?w=360",
      altText: "Home Decor",
      title: "Home Decor"
    },
    {
      imgSrc: "https://img.freepik.com/premium-photo/full-frame-shot-multi-colored-wall_1048944-26496738.jpg?w=740",
      altText: "Textile & Fiber Arts",
      title: "Textile & Fiber Arts"
    },
    {
      imgSrc: "https://image.shutterstock.com/image-photo/potters-hands-while-working-on-260nw-2248009987.jpg",
      altText: "Pottery & Ceramic Arts",
      title: "Pottery & Ceramic Arts"
    },
    {
      imgSrc: "https://img.freepik.com/premium-photo/patterned-resin-art-small-large-fade_1106493-100808.jpg?w=740",
      altText: "Glass & Resin Art",
      title: "Glass & Resin Art"
    },
    {
      imgSrc: "https://www.shutterstock.com/shutterstock/photos/2246968189/display_1500/stock-vector-shrinathji-or-lord-krishna-as-a-pichwai-folk-painting-indian-folk-art-2246968189.jpg",
      altText: "Traditional & Folk Art",
      title: "Traditional & Folk Art"
    }
  ];

  return (
    <div className="HomePage">
      <div className="LandingBanner">
        <p className="LandingBanner-Tagline">Hope us have great experience</p>
        
        <button>Explore more</button>
      </div>
      <div className="homePage-artOptions-Conatiner">
       {artCategories.map((item)=>{
        return(
          <div key={item} className="homeArtOption">
<img src={item.imgSrc} alt={`${item.altText} img`} />
<h6>{item.title}</h6>
          </div>
        )
       })}
      </div>
      <div>
        <img src="https://i.pinimg.com/474x/b3/14/8b/b3148b047bde2b364cff5f6bbe7033c3.jpg" alt="" 
        style={{width:'200px',aspectRatio:"1",margin:"10px",border:"1px solid black",padding:"5px"}}
        />
        <img src="https://i.pinimg.com/236x/4a/c2/57/4ac257f2db21003b2049e65a980e70f8.jpg" alt="" 
        style={{width:'200px',aspectRatio:"1",margin:"10px",border:"1px solid black",padding:"5px"}}
        />
        <img src="https://i.pinimg.com/236x/eb/84/d0/eb84d08cd91be1d9364e5ecd6c0a98f6.jpg" alt="" 
        style={{width:'200px',aspectRatio:"1",margin:"10px",border:"1px solid black",padding:"5px"}}
        />
        <img src="https://i.pinimg.com/236x/18/aa/dd/18aadd3efac36f98700575777d46fd7e.jpg" alt="" 
        style={{width:'200px',aspectRatio:"1",margin:"10px",border:"1px solid black",padding:"5px"}}
        />
      </div>
    </div>
  );
};

export default Home;

// 1. Visual Arts
// These are art forms that are primarily visual in nature.

// a) Traditional Fine Arts
// Painting: Using mediums like oil, watercolor, acrylic, or tempera on surfaces like canvas or paper.
// Drawing: Pencil, charcoal, ink, or pastels used to create illustrations or sketches.
// Sculpture: Three-dimensional art created by carving, modeling, or assembling materials like stone, clay, metal, or wood.
// Printmaking: Creating art through techniques like engraving, etching, or screen printing.
