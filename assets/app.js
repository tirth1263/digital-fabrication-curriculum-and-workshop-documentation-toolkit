const createIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const setupExperimentFilters = () => {
  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-track]");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const activeFilter = button.dataset.filter;

      filters.forEach((filter) => filter.classList.remove("is-active"));
      button.classList.add("is-active");

      cards.forEach((card) => {
        const isVisible = activeFilter === "all" || card.dataset.track === activeFilter;
        card.classList.toggle("is-hidden", !isVisible);
      });
    });
  });
};

const setupSafetyProgress = () => {
  const checklist = document.querySelector("[data-checklist]");
  const progressLabel = document.querySelector("[data-progress-label]");
  const progressBar = document.querySelector("[data-progress-bar]");

  if (!checklist || !progressLabel || !progressBar) {
    return;
  }

  const updateProgress = () => {
    const boxes = [...checklist.querySelectorAll("input[type='checkbox']")];
    const completed = boxes.filter((box) => box.checked).length;
    const percent = Math.round((completed / boxes.length) * 100);

    progressLabel.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
  };

  checklist.addEventListener("change", updateProgress);
  updateProgress();
};

const setupCopyButtons = () => {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const defaultLabel = button.querySelector("span")?.textContent || "Copy";

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        const label = button.querySelector("span");
        if (label) {
          label.textContent = "Copied";
          window.setTimeout(() => {
            label.textContent = defaultLabel;
          }, 1800);
        }
      } catch {
        const label = button.querySelector("span");
        if (label) {
          label.textContent = "Copy failed";
          window.setTimeout(() => {
            label.textContent = defaultLabel;
          }, 1800);
        }
      }
    });
  });
};

const setupHeaderState = () => {
  const header = document.querySelector("[data-header]");

  if (!header) {
    return;
  }

  const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();
};

document.addEventListener("DOMContentLoaded", () => {
  createIcons();
  setupExperimentFilters();
  setupSafetyProgress();
  setupCopyButtons();
  setupHeaderState();
});

