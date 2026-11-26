document.addEventListener("DOMContentLoaded", () => {
    const copyWrappers = document.querySelectorAll(".copy-wrapper");

    copyWrappers.forEach((wrapper) => {
        wrapper.addEventListener("click", async () => {
            const textToCopy = wrapper.dataset.copy;

            try {
                await navigator.clipboard.writeText(textToCopy);

                // TEMPORARILY DISABLED — uncomment when you want "Copied!" feedback
                /*
                const textElement = wrapper.querySelector("p");
                const originalText = textElement.textContent;

                textElement.textContent = "Copied!";

                setTimeout(() => {
                    textElement.textContent = originalText;
                }, 1500);
                */

            } catch (error) {
                console.error("Failed to copy:", error);
            }
        });
    });
});


// TEAM NAV

const items = document.querySelectorAll('.teamnav-item');

items.forEach(item => {
item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    });
});

document.querySelectorAll('.teamnav-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', e => {
      e.preventDefault();
      const isOpen = dropdown.classList.toggle('open');
      dropdown.querySelector('.teamnav-toggle')
              .setAttribute('aria-expanded', isOpen);
    });
});



