import React from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import "assets/css/logos.css";

const items = [
  {
    // Test require("assets/img/eventlogos.jpg").default
    src: require("assets/img/E1.jpg").default,
    altText: "Nature, United States",
    caption: "Nature, United States",
  },
  {
    src: require("assets/img/E3.jpg").default,
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/E5.jpg").default,
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States",
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div>
        <div
          style={{
            width: "390px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <img
                    style={{
                      height: "550px",
                      maxHeight: "550px",
                    }}
                    src={item.src}
                    alt={item.altText}
                  />
                </CarouselItem>
              );
            })}
            <span className="dispo"></span>
            <div>
              <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-left"></i>
              </a>
              <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-right"></i>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default CarouselSection;
