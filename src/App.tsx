import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./App.css";

import margherita from "./assets/pizzas/margherita.png";
import burrata from "./assets/pizzas/burrata.png";
import pesto from "./assets/pizzas/pesto.png";
import garlic from "./assets/pizzas/garlic.png";
import veggies from "./assets/pizzas/veggies.png";
import spicy from "./assets/pizzas/spicy.png";
import truffle from "./assets/pizzas/truffle.png";

const pizzas = [
  {
    id: 0,
    name: "MARGHERITA",
    subtitle: "CLASSIC VIBES. STRAIGHT-UP FLAVOR.",
    image: margherita,
    accent: "#ff006f",
  },
  {
    id: 1,
    name: "BURRATA",
    subtitle: "CREAMY. FRESH. AND LOW-KEY FIRE.",
    image: burrata,
    accent: "#f2b705",
  },
  {
    id: 2,
    name: "PESTO",
    subtitle: "GREEN, BRIGHT AND FULL OF FLAVOR.",
    image: pesto,
    accent: "#73d216",
  },
  {
    id: 3,
    name: "GARLIC",
    subtitle: "BOLD, CRISPY AND SERIOUSLY GOOD.",
    image: garlic,
    accent: "#e5d7a1",
  },
  {
    id: 4,
    name: "VEGGIES",
    subtitle: "FRESH COLORS. BIG FLAVOR.",
    image: veggies,
    accent: "#ff6b35",
  },
  {
    id: 5,
    name: "SPICY",
    subtitle: "HOT, LOUD AND IMPOSSIBLE TO IGNORE.",
    image: spicy,
    accent: "#ff2a2a",
  },
  {
    id: 6,
    name: "TRUFFLE",
    subtitle: "RICH, EARTHY AND A LITTLE EXTRA.",
    image: truffle,
    accent: "#a56eff",
  },
];
const VISIBLE_RANGE = 3;
const ANGLE_STEP = 26;
const ORBIT_RADIUS = 310;

const TITLE_ITEM_HEIGHT = 54;
const titleVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? TITLE_ITEM_HEIGHT : -TITLE_ITEM_HEIGHT,
    opacity: 0,
  }),

  center: {
    y: 0,
    opacity: 1,
  },

  exit: (direction: number) => ({
    y: direction > 0 ? -TITLE_ITEM_HEIGHT : TITLE_ITEM_HEIGHT,
    opacity: 0,
  }),
};

function App() {
  const [wheelStep, setWheelStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeIndex =
    ((wheelStep % pizzas.length) + pizzas.length) % pizzas.length;

  const currentCycle = Math.floor(wheelStep / pizzas.length);

  const nextPizza = () => {
    setDirection(1);
    setWheelStep((current) => current + 1);
  };

  const previousPizza = () => {
    setDirection(-1);
    setWheelStep((current) => current - 1);
  };

  return (
    <main
      className="hero"
      style={
        {
          "--accent": pizzas[activeIndex].accent,
        } as CSSProperties
      }
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={pizzas[activeIndex].id}
          className="hero-accent"
          style={{
            background: `
          radial-gradient(
            circle at 50% 42%,
            ${pizzas[activeIndex].accent}33 0%,
            ${pizzas[activeIndex].accent}12 28%,
            transparent 62%
          )
        `,
          }}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.08,
          }}
          transition={{
            duration: 1.1,
            ease: [0.77, 0, 0.18, 1],
          }}
        />
      </AnimatePresence>

      <div
        className="accent-provider"
        style={
          {
            "--accent": pizzas[activeIndex].accent,
          } as CSSProperties
        }
      >
        <header className="header">
          <a className="logo" href="#">
            PIZZA
          </a>

          <nav className="nav">
            <a href="#">COLLECTION</a>
            <a href="#">ABOUT US</a>
            <a href="#">LOCATIONS</a>
          </nav>

          <div className="header-right">
            <a href="#">MENU</a>
            <a href="#">CART</a>

            <button className="order-button">ORDER ONLINE</button>
          </div>
        </header>

        <section className="hero-content">
          <div className="headline-row">
            <motion.div
              className="headline-decoration decoration-left"
              animate={{
                rotate: wheelStep * -18,
                scale: [1, 1.08, 1],
              }}
              transition={{
                rotate: {
                  duration: 1.25,
                  ease: [0.77, 0, 0.18, 1],
                },
                scale: {
                  duration: 0.7,
                },
              }}
            >
              <svg viewBox="0 0 60 60" aria-hidden="true">
                <path
                  d="M43 8C24 10 10 22 11 40c14 2 28-7 32-32Z"
                  fill="currentColor"
                />

                <path
                  d="M16 40c7-9 14-16 25-25"
                  fill="none"
                  stroke="#101010"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <div className="headline">
              <span className="headline-static">I'M TEMPTED BY</span>

              <div className="headline-name">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.span
                    key={pizzas[activeIndex].id}
                    className="headline-slide"
                    custom={direction}
                    variants={titleVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.65,
                      ease: [0.77, 0, 0.18, 1],
                    }}
                  >
                    {pizzas[activeIndex].name}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              className="headline-decoration decoration-right"
              animate={{
                rotate: wheelStep * 16,
                scale: [1, 1.08, 1],
              }}
              transition={{
                rotate: {
                  duration: 1.25,
                  ease: [0.77, 0, 0.18, 1],
                },
                scale: {
                  duration: 0.7,
                },
              }}
            >
              <svg viewBox="0 0 70 70" aria-hidden="true">
                <ellipse
                  cx="35"
                  cy="18"
                  rx="10"
                  ry="20"
                  fill="currentColor"
                  transform="rotate(-25 35 18)"
                />

                <ellipse
                  cx="20"
                  cy="36"
                  rx="9"
                  ry="18"
                  fill="currentColor"
                  transform="rotate(-55 20 36)"
                />

                <ellipse
                  cx="49"
                  cy="39"
                  rx="9"
                  ry="19"
                  fill="currentColor"
                  transform="rotate(50 49 39)"
                />

                <path
                  d="M35 57 34 25M34 38 21 33M34 39 49 34"
                  fill="none"
                  stroke="#101010"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          <div className="pizza-stage">
            {[currentCycle - 1, currentCycle, currentCycle + 1].flatMap(
              (cycle) =>
                pizzas.map((item, index) => {
                  const virtualIndex = cycle * pizzas.length + index;

                  const relativeIndex = virtualIndex - wheelStep;

                  if (Math.abs(relativeIndex) > VISIBLE_RANGE) {
                    return null;
                  }

                  const angle = relativeIndex * ANGLE_STEP;

                  const radians = (angle * Math.PI) / 180;

                  /*
      Настоящая окружность.

      x² + (y - R)² = R²

      При relativeIndex === 0:
      x = 0
      y = 0

      Чем дальше кусок от центра,
      тем ниже он уходит по дуге.
    */
                  const x = Math.sin(radians) * ORBIT_RADIUS;

                  const y = (1 - Math.cos(radians)) * ORBIT_RADIUS;

                  const distance = Math.abs(relativeIndex);

                  const isActive = relativeIndex === 0;

                  const scale =
                    distance === 0
                      ? 1.14
                      : distance === 1
                        ? 0.9
                        : distance === 2
                          ? 0.74
                          : 0.62;

                  const opacity =
                    distance === 0
                      ? 1
                      : distance === 1
                        ? 0.78
                        : distance === 2
                          ? 0.46
                          : 0.14;

                  return (
                    <motion.div
                      key={`${item.id}-${virtualIndex}`}
                      className={`pizza-item ${isActive ? "active" : ""}`}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        x,
                        y,
                        rotate: angle,
                        scale,
                        opacity,
                      }}
                      transition={{
                        x: {
                          duration: 1.35,
                          ease: [0.77, 0, 0.18, 1],
                        },
                        y: {
                          duration: 1.35,
                          ease: [0.77, 0, 0.18, 1],
                        },
                        rotate: {
                          duration: 1.35,
                          ease: [0.77, 0, 0.18, 1],
                        },
                        scale: {
                          duration: 1.35,
                          ease: [0.77, 0, 0.18, 1],
                        },
                        opacity: {
                          duration: 0.55,
                        },
                      }}
                      style={{
                        zIndex: 20 - distance,
                      }}
                    >
                      <div className="slice-frame">
                        <img
                          className="pizza-slice-image"
                          src={item.image}
                          alt={item.name}
                          draggable={false}
                        />
                      </div>
                    </motion.div>
                  );
                }),
            )}
          </div>

          <div className="bottom-controls">
            <button
              className="arrow-button"
              onClick={previousPizza}
              aria-label="Previous pizza"
            >
              ←
            </button>

            <AnimatePresence mode="wait">
              <motion.p
                key={pizzas[activeIndex].id}
                className="pizza-description"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                {pizzas[activeIndex].subtitle}
              </motion.p>
            </AnimatePresence>

            <button
              className="arrow-button"
              onClick={nextPizza}
              aria-label="Next pizza"
            >
              →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
