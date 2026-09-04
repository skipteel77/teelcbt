import { useEffect } from "react";

const WIDGET_SRC =
  "https://widget-cdn.simplepractice.com/assets/integration-1.0.js";

export default function ContactWidget() {
  // SimplePractice binds the button when its script executes, so the tag is
  // added after mount and removed on unmount to re-run on client navigation.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="spwidget-button-wrapper">
      <a
        className="spwidget-button"
        href="https://karen-teel.clientsecure.me"
        data-spwidget-scope-id="f0bb7607-9917-4f3b-81bd-fddb06b08356"
        data-spwidget-scope-uri="karen-teel"
        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
        data-spwidget-channel="embedded_widget"
        data-spwidget-type="Contact form"
        data-spwidget-contact=""
        data-spwidget-scope-global=""
        data-spwidget-autobind=""
      >
        Click Here to Schedule a Consultation
      </a>
    </div>
  );
}
