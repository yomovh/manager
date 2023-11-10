/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ApiVersion } from "./msc-tail-logs/msc-tail-logs";
import { LogEntry } from "./msc-tail-logs/msc-tail-logs.type";
export namespace Components {
    interface MscTailLogs {
        "apiVersion": ApiVersion;
        "autoRefresh": boolean;
        "limit": number;
        "locale": "de-DE" | "en-GB" | "es-ES" | "fr-CA" | "fr-FR" | "it-IT" | "pl-PL" | "pt-PT";
        "refreshInterval": number;
        "sort": "asc" | "desc";
        "source": string;
    }
    interface MscTailLogsCode {
        "logs": LogEntry[];
    }
}
declare global {
    interface HTMLMscTailLogsElement extends Components.MscTailLogs, HTMLStencilElement {
    }
    var HTMLMscTailLogsElement: {
        prototype: HTMLMscTailLogsElement;
        new (): HTMLMscTailLogsElement;
    };
    interface HTMLMscTailLogsCodeElement extends Components.MscTailLogsCode, HTMLStencilElement {
    }
    var HTMLMscTailLogsCodeElement: {
        prototype: HTMLMscTailLogsCodeElement;
        new (): HTMLMscTailLogsCodeElement;
    };
    interface HTMLElementTagNameMap {
        "msc-tail-logs": HTMLMscTailLogsElement;
        "msc-tail-logs-code": HTMLMscTailLogsCodeElement;
    }
}
declare namespace LocalJSX {
    interface MscTailLogs {
        "apiVersion"?: ApiVersion;
        "autoRefresh"?: boolean;
        "limit"?: number;
        "locale"?: "de-DE" | "en-GB" | "es-ES" | "fr-CA" | "fr-FR" | "it-IT" | "pl-PL" | "pt-PT";
        "refreshInterval"?: number;
        "sort"?: "asc" | "desc";
        "source"?: string;
    }
    interface MscTailLogsCode {
        "logs"?: LogEntry[];
    }
    interface IntrinsicElements {
        "msc-tail-logs": MscTailLogs;
        "msc-tail-logs-code": MscTailLogsCode;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "msc-tail-logs": LocalJSX.MscTailLogs & JSXBase.HTMLAttributes<HTMLMscTailLogsElement>;
            "msc-tail-logs-code": LocalJSX.MscTailLogsCode & JSXBase.HTMLAttributes<HTMLMscTailLogsCodeElement>;
        }
    }
}
