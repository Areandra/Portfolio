import React from "react";
import { gsap } from "gsap";
import { Element, scroller } from "react-scroll";

interface MenuItemProps {
  link: string;
  text: string;
  hoverContent: React.ReactNode;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, hoverContent }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const revealRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLSpanElement>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);
  const [revealContent, setRevealContent] = React.useState<Boolean>(false);

  const progressTween = React.useRef<gsap.core.Tween | null>(null);
  const isExpanded = React.useRef(false);

  const animationDefaults = { duration: 0.6, ease: "expo.out" };
  const initialHeight = "15vh";

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const expandMenu = (ev: React.MouseEvent<HTMLDivElement>, link: string) => {
    if (!itemRef.current || !revealRef.current || !contentRef.current) return;

    setRevealContent(true);

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    isExpanded.current = true;

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.set(textRef.current, { autoAlpha: 0 }, 0)
      .set(revealRef.current, {
        y: edge === "top" ? "-100%" : "100%",
        display: "block",
      })
      .set(contentRef.current, {
        y: edge === "top" ? "100%" : "-100%",
      })
      .to(itemRef.current, { height: "100vh" }, 0)
      .to([revealRef.current, contentRef.current], { y: "0%" }, 0);

    scroller.scrollTo(link, {
      duration: 800,
      offset: -160,
      smooth: "easeInOutQuart",
    });
  };

  const handleMouseEnter = (
    ev: React.MouseEvent<HTMLDivElement>,
    link: string
  ) => {
    if (!progressRef.current) return;

    isExpanded.current = false;

    gsap.set(progressRef.current, { scaleX: 0 });

    progressTween.current = gsap.to(progressRef.current, {
      scaleX: 1,
      duration: 0.6, // waktu tahan hover
      ease: "linear",
      transformOrigin: "left center",
      onComplete: () => expandMenu(ev, link),
    });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !revealRef.current || !contentRef.current) return;

    progressTween.current?.kill();
    gsap.set(progressRef.current, { scaleX: 0 });

    if (!isExpanded.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    isExpanded.current = false;

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.to(itemRef.current, { height: initialHeight }, 0)
      .to(revealRef.current, { y: edge === "top" ? "-100%" : "100%" }, 0)
      .to(contentRef.current, { y: edge === "top" ? "100%" : "-100%" }, 0)
      .set(textRef.current, { autoAlpha: 1 }, 0);

    setRevealContent(false);

    scroller.scrollTo("project", {
      duration: 800,
      offset: -80,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      ref={itemRef}
      style={{ height: initialHeight }}
      className="relative w-full overflow-hidden border-b border-white/20"
      onMouseEnter={(e) => handleMouseEnter(e, link)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Label */}
      <div className="flex items-center justify-center h-full w-full pointer-events-none">
        <span
          ref={textRef}
          className="uppercase font-semibold text-white text-[4vh]"
        >
          {text}
        </span>
      </div>

      {/* Expand Overlay */}
      <Element name={link}>
        <div
          ref={revealRef}
          className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.1)] hidden overflow-hidden"
        >
          <div
            ref={contentRef}
            className="h-screen w-full flex items-center justify-center text-black"
          >
            {revealContent ? hoverContent : <></>}
          </div>
        </div>
      </Element>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-full bg-white origin-left scale-x-0"
        />
      </div>
    </div>
  );
};

export default FlowingMenu;
