import React, { createRef, forwardRef, useEffect, useImperativeHandle, useRef, useState, memo } from 'react';
import { animated, useSpring } from 'react-spring';

import styled from '@emotion/styled';
import { useScroll } from 'react-use-gesture';

const Wrapper = styled(animated.div)`
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  display: flex;
  overflow-x: scroll;
  padding-bottom: 1rem;
  padding-top: 1rem;
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition: all 3.5s;
  width: 100%;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  }
  return value < -clampAt ? -clampAt : value;
};

const Carousel = forwardRef(({ children, ...props }, ref) => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const childrenWithKeys = React.Children.toArray(children);
  const elRef = useRef([...Array(childrenWithKeys.length)].map(() => createRef()));
  const wrapper = useRef(null);

  const [style, set] = useSpring(() => ({
    transform: 'perspective(100rem) rotateY(0deg)',
  }));

  useEffect(() => {
    const { offsetWidth = 0 } = elRef.current[0]?.current || { offsetWidth: 0 };
    setScrollAmount(offsetWidth);
  }, []);

  const bind = useScroll(event => {
    set({
      transform: `perspective(100rem) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`,
    });
  });

  const leftScroll = () => {
    const { scrollLeft } = wrapper.current;
    const number = Math.floor(scrollLeft / scrollAmount);
    if (scrollLeft === number * scrollAmount) {
      wrapper.current.scrollLeft = number * scrollAmount - scrollAmount;
    } else {
      wrapper.current.scrollLeft = number * scrollAmount;
    }
  };

  const rightScroll = () => {
    const { scrollLeft } = wrapper.current;
    const number = Math.floor(scrollLeft / scrollAmount);
    wrapper.current.scrollLeft = number * scrollAmount + scrollAmount;
  };

  useImperativeHandle(ref, () => ({
    leftScroll() {
      leftScroll();
    },
    rightScroll() {
      rightScroll();
    },
  }));

  return (
    <Wrapper ref={wrapper} {...props} {...bind()}>
      {React.Children.map(children, (child, i) => (
        <animated.div ref={elRef.current[i]} key={child.key}>
          {React.cloneElement(child)}
        </animated.div>
      ))}
    </Wrapper>
  );
});

export default memo(Carousel);
