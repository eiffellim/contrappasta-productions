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