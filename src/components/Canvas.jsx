import { useEffect, useRef } from "react";

export default function Canvas() {
  const iframeRef = useRef();

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleLoad = () => {
      console.log("iframe loaded");
      // Send test message after load
      setTimeout(() => {
        iframe.contentWindow.postMessage("hello_from_parent", "*");
      }, 1000);
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <iframe
        id="my-iframe"
        ref={iframeRef}
        src="https://playcanv.as/p/XI1YuQwH"
        className="w-full h-full m-0 p-0"
        title="Embedded Website"
        allowFullScreen
        // Important for cross-origin communication
        allow="cross-origin-isolated"
      />
    </div>
  );
}
