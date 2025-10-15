document.addEventListener("DOMContentLoaded", async () => {
  const { tsParticles } = window;

  await tsParticles.load({
    id: "tsparticles",
    options: {
      fpsLimit: 600,
      background: { color: "#060606" },
      particles: {
        number: { value: 800, density: { enable: true, area: 900 } },
        color: { value: ["#06b6d4", "#00ffff", "#7efcff"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true,
          animation: { enable: true, speed: 0.6, minimumValue: 0.2, sync: false }
        },
        size: {
          value: { min: 1, max: 4 },
          animation: { enable: true, speed: 2, minimumValue: 0.6, sync: false }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#06b6d4",
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 },
          push: { quantity: 4 }
        }
      },
      detectRetina: true
    }
  });
});
