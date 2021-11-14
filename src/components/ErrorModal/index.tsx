import { Component, Resource, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { IpLookupResponse } from "../../adapters/ipLookup";

export const ErrorModal: Component<{
  details: Resource<IpLookupResponse | undefined>;
}> = (props) => {

  const errorMsg = () => {
    const details = props.details();
    if (!details) return "";
    if ("ip" in details) return "";
    return details.error;
  };

  return (
    <Portal mount={document.getElementById("app-modal") || undefined}>
      <Show when={props.details.error || errorMsg()}>
        <div className="app-modal cover">
          <div class="bg-white pad-400 flex-col text-center center cover-primary">
            <h2 class="fs-600">Error</h2>
            <p class="fs-400">{errorMsg()}</p>
          </div>
        </div>
      </Show>
    </Portal>
  );
};
