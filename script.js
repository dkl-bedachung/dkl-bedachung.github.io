document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("open");

            document.body.classList.toggle("menu-open", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute(
                "aria-label",
                isOpen ? "Menü schließen" : "Menü öffnen"
            );
            toggle.textContent = isOpen ? "×" : "☰";
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                document.body.classList.remove("menu-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Menü öffnen");
                toggle.textContent = "☰";
            });
        });
    }

    document.querySelectorAll("[data-year]").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    const form = document.querySelector("#contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            const data = new FormData(form);

            const name = data.get("name") || "";
            const email = data.get("email") || "";
            const phone = data.get("phone") || "";
            const service = data.get("service") || "";
            const message = data.get("message") || "";

            const subject = encodeURIComponent(
                "Website-Anfrage – " + service
            );

            const body = encodeURIComponent(
                "Neue Anfrage über die DLZ-Bedachungen-Website\n\n" +
                "Name: " + name + "\n" +
                "E-Mail: " + email + "\n" +
                "Telefon: " + phone + "\n" +
                "Leistung: " + service + "\n\n" +
                "Nachricht:\n" + message
            );

            const status = document.querySelector(".form-status");

            if (status) {
                status.textContent =
                    "Dein E-Mail-Programm wird geöffnet. Bitte prüfe die Nachricht und sende sie dort ab.";
            }

            window.location.href =
                "mailto:info@dlz-bedachungen.de?subject=" +
                subject + "&body=" + body;
        });
    }
});
