/* ========================================
         SETTINGS
      ======================================== */

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      /* ========================================
         CURSOR FOLLOWING AMBIENT LIGHT
      ======================================== */

      const cursorGlow = document.querySelector(".cursor-glow");

      if (cursorGlow && hasFinePointer && !prefersReducedMotion) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let glowX = mouseX;
        let glowY = mouseY;

        window.addEventListener(
          "mousemove",
          (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
          },
          { passive: true },
        );

        function animateCursorGlow() {
          glowX += (mouseX - glowX) * 0.075;
          glowY += (mouseY - glowY) * 0.075;

          cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;

          requestAnimationFrame(animateCursorGlow);
        }

        animateCursorGlow();

        /*
          Fade the light in when the user
          actually moves the mouse.
        */

        window.addEventListener(
          "mousemove",
          () => {
            cursorGlow.style.opacity = "1";
          },
          { once: true },
        );
      }

      /* ========================================
         HERO IMAGE MOUSE MOVEMENT
      ======================================== */

      const heroImage = document.querySelector(".hero-image");

      if (heroImage && hasFinePointer && !prefersReducedMotion) {
        let targetX = 0;
        let targetY = 0;

        let currentX = 0;
        let currentY = 0;

        window.addEventListener(
          "mousemove",
          (event) => {
            targetX = (event.clientX / window.innerWidth - 0.5) * 4;

            targetY = (event.clientY / window.innerHeight - 0.5) * 4;
          },
          { passive: true },
        );

        function animateHeroImage() {
          currentX += (targetX - currentX) * 0.035;

          currentY += (targetY - currentY) * 0.035;

          heroImage.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

          requestAnimationFrame(animateHeroImage);
        }

        animateHeroImage();
      }

      /* ========================================
         GSAP TEXT REVEAL
      ======================================== */

      if (typeof gsap !== "undefined") {
        gsap.set(".headline-word", {
          y: 90,
          opacity: 0,
          rotateX: -45,
          transformOrigin: "50% 100%",
        });

        gsap.set(".hero-image", {
          scale: 0.82,
          opacity: 0,
        });

        gsap.set(".actions", {
          y: 30,
          opacity: 0,
        });

        gsap.set(".devotional-closer", {
          y: 18,
          opacity: 0,
        });

        gsap.set(".temple-divider span", {
          scale: 0.5,
        });

        const intro = gsap.timeline({
          delay: 0.25,
        });

        if (prefersReducedMotion) {
          intro.to(".headline-word", {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.01,
          });

          intro.to(
            ".hero-image",
            {
              scale: 1,
              opacity: 1,
              duration: 0.01,
            },
            "<",
          );

          intro.to(
            ".actions",
            {
              y: 0,
              opacity: 1,
              duration: 0.01,
            },
            "<",
          );

          intro.to(
            ".devotional-closer",
            {
              y: 0,
              opacity: 1,
              duration: 0.01,
            },
            "<",
          );

          intro.to(
            ".temple-divider span",
            {
              scale: 1,
              duration: 0.01,
            },
            "<",
          );
        } else {
          intro.to(".headline-word", {
            y: 0,
            opacity: 1,
            rotateX: 0,

            duration: 1.15,

            ease: "power4.out",

            stagger: 0.12,
          });

          intro.to(
            ".hero-image",
            {
              scale: 1,
              opacity: 1,

              duration: 1.2,

              ease: "power3.out",
            },
            "-=0.72",
          );

          intro.to(
            ".actions",
            {
              y: 0,
              opacity: 1,

              duration: 0.9,

              ease: "power3.out",
            },
            "-=0.65",
          );

          intro.to(
            ".devotional-closer",
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.45",
          );

          intro.to(
            ".temple-divider span",
            {
              scale: 1,
              rotation: 45,
              duration: 0.7,
              ease: "back.out(2)",
            },
            "<+0.1",
          );
        }

        document.addEventListener("visibilitychange", () => {
          if (!document.hidden) {
            intro.progress(1);
          }
        });
      }
