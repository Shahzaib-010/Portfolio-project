// src/PageTransition.jsx
import React, { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import './PageTransition.css';

const PageTransition = ({ children, location }) => {
  const transitionRef = useRef(null);
  const overlayRef = useRef(null);
  const wrapperRef = useRef(null);

  const key = location.pathname;

  const animateTransition = (node, done) => {
    const overlay = overlayRef.current;
    const wrapper = wrapperRef.current;

    // Disable interaction globally during animation
    wrapper.classList.add('pointer-events-none');

    const tl = gsap.timeline({
      onComplete: () => {
        // Restore interactions once animation ends
        wrapper.classList.remove('pointer-events-none');
        gsap.set(overlay, { visibility: 'hidden', pointerEvents: 'none' });
        done();
      },
    });

    // Step 1: Overlay in (bottom → cover)
    tl.set(overlay, {
      y: '100%',
      visibility: 'visible',
      pointerEvents: 'auto',
    })
      .to(overlay, {
        y: '0%',
        duration: 0.8,
        ease: 'power3.inOut',
      })

      // Step 2: Fade + slide in new page
      .fromTo(
        node,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )

      // Step 3: Overlay out (top → offscreen)
      .to(
        overlay,
        {
          y: '-100%',
          duration: 0.8,
          ease: 'power3.inOut',
        },
        '+=0.1'
      );
  };

  return (
    <div
      ref={wrapperRef}
      className="relative min-h-screen overflow-x-hidden overflow-y-visible"
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-[var(--color-orange)] z-[1000] invisible pointer-events-none"
        style={{ transform: 'translateY(100%)' }}
      ></div>

      {/* Pages */}
      <TransitionGroup component={null}>
        <CSSTransition
          key={key}
          nodeRef={transitionRef}
          timeout={1800}
          classNames="page"
          addEndListener={(node, done) => animateTransition(node, done)}
        >
          <div
            ref={transitionRef}
            className="relative z-[10] w-full h-full overflow-visible"
          >
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default PageTransition;
