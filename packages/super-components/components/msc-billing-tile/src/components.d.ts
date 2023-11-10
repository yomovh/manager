/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Locale } from "@ovhcloud/msc-utils";
import { ServiceDetails, ServiceInfos, Translations } from "./msc-billing-tile/msc-billing.types";
import { BillingTileURLs } from "./msc-billing-tile/urls";
export namespace Components {
    interface MenuCustom {
    }
    interface MscBillingCommitment {
        "commitmentDataTracking"?: string;
        "locale": Locale;
        "localeStrings": Translations;
        "nextBillingDate": string;
        "serviceDetails"?: ServiceDetails;
        "servicePath": string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingContact {
        "changeOwnerDataTracking"?: string;
        "localeStrings": Translations;
        "serviceInfos": ServiceInfos;
        "serviceName": string;
        "serviceType": string;
        "subscriptionManagementDataTracking"?: string;
        "updateOwnerDataTracking"?: string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingOffer {
        "changeOfferDataTracking"?: string;
        "localeStrings": Translations;
        "serviceDetails"?: ServiceDetails;
        "serviceInfos": ServiceInfos;
        "servicePath": string;
        "serviceType": string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingRenewal {
        "anticipateRenewDataTracking"?: string;
        "cancelResiliationDataTracking"?: string;
        "localeStrings": Translations;
        "manageRenewDataTracking"?: string;
        "nextBillingDate"?: string;
        "renewLinkDataTracking"?: string;
        "resiliateDataTracking"?: string;
        "serviceDetails"?: ServiceDetails;
        "serviceInfos"?: ServiceInfos;
        "serviceName": string;
        "servicePath": string;
        "serviceType": string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingTile {
        "anticipateRenewDataTracking"?: string;
        "appPublicUrl": string;
        "cancelResiliationDataTracking"?: string;
        "changeOfferDataTracking"?: string;
        "changeOwnerDataTracking"?: string;
        "commitmentDataTracking"?: string;
        "locale": "de-DE" | "en-GB" | "es-ES" | "fr-CA" | "fr-FR" | "it-IT" | "pl-PL" | "pt-PT";
        "manageRenewDataTracking"?: string;
        "region": "US" | "CA" | "EU";
        "renewLinkDataTracking"?: string;
        "resiliateDataTracking"?: string;
        "servicePath": string;
        "subscriptionManagementDataTracking"?: string;
        "subsidiary": "US" | "CA" | "DE" | "ES" | "FR" | "GB" | "IE" | "IT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN" | "ASIA" | "AU" | "QC" | "SG" | "WE" | "WS";
        "updateOwnerDataTracking"?: string;
    }
}
declare global {
    interface HTMLMenuCustomElement extends Components.MenuCustom, HTMLStencilElement {
    }
    var HTMLMenuCustomElement: {
        prototype: HTMLMenuCustomElement;
        new (): HTMLMenuCustomElement;
    };
    interface HTMLMscBillingCommitmentElement extends Components.MscBillingCommitment, HTMLStencilElement {
    }
    var HTMLMscBillingCommitmentElement: {
        prototype: HTMLMscBillingCommitmentElement;
        new (): HTMLMscBillingCommitmentElement;
    };
    interface HTMLMscBillingContactElement extends Components.MscBillingContact, HTMLStencilElement {
    }
    var HTMLMscBillingContactElement: {
        prototype: HTMLMscBillingContactElement;
        new (): HTMLMscBillingContactElement;
    };
    interface HTMLMscBillingOfferElement extends Components.MscBillingOffer, HTMLStencilElement {
    }
    var HTMLMscBillingOfferElement: {
        prototype: HTMLMscBillingOfferElement;
        new (): HTMLMscBillingOfferElement;
    };
    interface HTMLMscBillingRenewalElement extends Components.MscBillingRenewal, HTMLStencilElement {
    }
    var HTMLMscBillingRenewalElement: {
        prototype: HTMLMscBillingRenewalElement;
        new (): HTMLMscBillingRenewalElement;
    };
    interface HTMLMscBillingTileElement extends Components.MscBillingTile, HTMLStencilElement {
    }
    var HTMLMscBillingTileElement: {
        prototype: HTMLMscBillingTileElement;
        new (): HTMLMscBillingTileElement;
    };
    interface HTMLElementTagNameMap {
        "menu-custom": HTMLMenuCustomElement;
        "msc-billing-commitment": HTMLMscBillingCommitmentElement;
        "msc-billing-contact": HTMLMscBillingContactElement;
        "msc-billing-offer": HTMLMscBillingOfferElement;
        "msc-billing-renewal": HTMLMscBillingRenewalElement;
        "msc-billing-tile": HTMLMscBillingTileElement;
    }
}
declare namespace LocalJSX {
    interface MenuCustom {
    }
    interface MscBillingCommitment {
        "commitmentDataTracking"?: string;
        "locale"?: Locale;
        "localeStrings"?: Translations;
        "nextBillingDate"?: string;
        "serviceDetails"?: ServiceDetails;
        "servicePath"?: string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingContact {
        "changeOwnerDataTracking"?: string;
        "localeStrings"?: Translations;
        "serviceInfos"?: ServiceInfos;
        "serviceName"?: string;
        "serviceType"?: string;
        "subscriptionManagementDataTracking"?: string;
        "updateOwnerDataTracking"?: string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingOffer {
        "changeOfferDataTracking"?: string;
        "localeStrings"?: Translations;
        "serviceDetails"?: ServiceDetails;
        "serviceInfos"?: ServiceInfos;
        "servicePath"?: string;
        "serviceType"?: string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingRenewal {
        "anticipateRenewDataTracking"?: string;
        "cancelResiliationDataTracking"?: string;
        "localeStrings"?: Translations;
        "manageRenewDataTracking"?: string;
        "nextBillingDate"?: string;
        "renewLinkDataTracking"?: string;
        "resiliateDataTracking"?: string;
        "serviceDetails"?: ServiceDetails;
        "serviceInfos"?: ServiceInfos;
        "serviceName"?: string;
        "servicePath"?: string;
        "serviceType"?: string;
        "urls"?: BillingTileURLs;
    }
    interface MscBillingTile {
        "anticipateRenewDataTracking"?: string;
        "appPublicUrl"?: string;
        "cancelResiliationDataTracking"?: string;
        "changeOfferDataTracking"?: string;
        "changeOwnerDataTracking"?: string;
        "commitmentDataTracking"?: string;
        "locale"?: "de-DE" | "en-GB" | "es-ES" | "fr-CA" | "fr-FR" | "it-IT" | "pl-PL" | "pt-PT";
        "manageRenewDataTracking"?: string;
        "region"?: "US" | "CA" | "EU";
        "renewLinkDataTracking"?: string;
        "resiliateDataTracking"?: string;
        "servicePath"?: string;
        "subscriptionManagementDataTracking"?: string;
        "subsidiary"?: "US" | "CA" | "DE" | "ES" | "FR" | "GB" | "IE" | "IT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN" | "ASIA" | "AU" | "QC" | "SG" | "WE" | "WS";
        "updateOwnerDataTracking"?: string;
    }
    interface IntrinsicElements {
        "menu-custom": MenuCustom;
        "msc-billing-commitment": MscBillingCommitment;
        "msc-billing-contact": MscBillingContact;
        "msc-billing-offer": MscBillingOffer;
        "msc-billing-renewal": MscBillingRenewal;
        "msc-billing-tile": MscBillingTile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "menu-custom": LocalJSX.MenuCustom & JSXBase.HTMLAttributes<HTMLMenuCustomElement>;
            "msc-billing-commitment": LocalJSX.MscBillingCommitment & JSXBase.HTMLAttributes<HTMLMscBillingCommitmentElement>;
            "msc-billing-contact": LocalJSX.MscBillingContact & JSXBase.HTMLAttributes<HTMLMscBillingContactElement>;
            "msc-billing-offer": LocalJSX.MscBillingOffer & JSXBase.HTMLAttributes<HTMLMscBillingOfferElement>;
            "msc-billing-renewal": LocalJSX.MscBillingRenewal & JSXBase.HTMLAttributes<HTMLMscBillingRenewalElement>;
            "msc-billing-tile": LocalJSX.MscBillingTile & JSXBase.HTMLAttributes<HTMLMscBillingTileElement>;
        }
    }
}
