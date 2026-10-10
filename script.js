"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("is-open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Menü schließen" : "Menü öffnen"
            );
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Menü öffnen");
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                mainNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Menü öffnen");
            }
        });
    }

    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const name = document.getElementById("name").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();
            const status = document.getElementById("formStatus");

            const subject = encodeURIComponent(
                "Website-Anfrage von " + name
            );

            const body = encodeURIComponent(
                "Neue Anfrage über die Website von DLZ-Bedachungen\n\n" +
                "Name: " + name + "\n" +
                "Telefon oder E-Mail: " + contact + "\n" +
                "Gewünschte Leistung: " + (service || "Nicht angegeben") + "\n\n" +
                "Nachricht:\n" + message
            );

            const mailto =
                "mailto:info@dlz-bedachungen.de" +
                "?subject=" + subject +
                "&body=" + body;

            if (status) {
                status.textContent =
                    "Dein E-Mail-Programm wird geöffnet. Bitte prüfe die Nachricht und sende sie dort ab.";
            }

            window.location.href = mailto;
        });
    }
});
